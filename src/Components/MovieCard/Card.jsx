import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import styles from './movieCard.module.css'
import CircularProgress from '@material-ui/core/CircularProgress';
import cx from 'classnames'
import noImage from "../../Images/noImage.png"
import { Button } from '@material-ui/core';
import DetailModel from "./../Details/DetailModel"


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent:'center',
    '& > *': {
      margin: theme.spacing(3),
      width: theme.spacing(40),
      height: theme.spacing(50),
    },
  },
  loading: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));




export default function SimplePaper({data}) {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };


  const classes = useStyles();
  const imgUrl = "https://image.tmdb.org/t/p/original"
  if(data[0]){
    console.log(data[0])
    return (
      <div className={classes.root}>
        
        {data.map(d =>{
          return(
            <Paper key = {d.id} className={cx(styles.paperShadow)}  onClick={handleClickOpen}>
              
                <img className = {styles.movieImg} src={d.poster_path != null ? (imgUrl+ `${d.poster_path}`): noImage} alt=""></img>
                <div className={styles.titleAndYearContainer}>
                  <h3>{d.title}</h3>
                  <h5>{d.vote_average}</h5>
                  <DetailModel title ={d.title} overview={d.overview}></DetailModel>
                </div>
                
              
          </Paper>
          
          )
        })}
      </div>
    );
  }else{
    if(data[0]){
      return (
        <div className={styles.loading} >
          <CircularProgress size = {280} color="secondary" />
          <h1>Loading...</h1>
        </div>
      )
    }else{
      return (
        <div className={styles.loading} >
          <CircularProgress size = {280} color="secondary" />
          <h1>No Result Found!</h1>
          <a href='/'><Button variant="contained" color="primary" disableElevation>GO BACK</Button></a>
        </div>
      )

    }

  }
  
}