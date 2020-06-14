import React from 'react';
import NavBar from './Components/Header/NavBar'
import MovieCard from "./Components/MovieCard/Card"
import {fetchPopularMovies} from './API'
import {searchMovieByName} from './API'
import './App.css';
import styles from './elementAppStyle.modules.css'

class App extends React.Component{

  state = {
    popularMovies:{},
    searchMovies:null,
  }
 

  async componentDidMount(){
      const fetchedData =  await fetchPopularMovies()
      this.setState({popularMovies: fetchedData})
      //console.log(searchMovieData)
  }

  newMovieTyped = async(name)=>{
    if(name == ""){
      this.setState({searchMovies: null})
    }else{
      const searchMovieData = await searchMovieByName(name)
      this.setState({searchMovies: searchMovieData})
      console.log(this.state.searchMovies)
    }

  }
  
  showSerchedMovieTag(movieList){
    if(movieList != undefined){
      return(
        <div>
          <h1>Searched Movies</h1>
          <MovieCard className={styles.MovieCard} data={movieList}/>
        </div>
      )
    }else{
      return null
    }

  }

  
  render(){
    console.log(this.state.searchMovies)
    let populMovie = this.state.popularMovies;
    return (
      <div className="App">
        <NavBar searchState={this.state.searchInput} handleNewMovie={this.newMovieTyped}/>
        {this.state.searchMovies== null?
         <div>
          <h1>Popular Movies</h1>
          <MovieCard className={styles.MovieCard} data={populMovie}/>
        </div>: this.showSerchedMovieTag(this.state.searchMovies)}
      </div>
      
    )
  }

}

export default App;
