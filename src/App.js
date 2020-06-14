import React from 'react';
import NavBar from './Components/Header/NavBar'
import MovieCard from "./Components/MovieCard/Card"
import {fetchPopularMovies} from './API'
import './App.css';
import styles from './elementAppStyle.modules.css'

class App extends React.Component{

  state = {
    popularMovies:{},
    latestMovie:{}
}

async componentDidMount(){
    const fetchedData =  await fetchPopularMovies()
    this.setState({popularMovies: fetchedData})
}
  
  

  render(){
    let populMovie = this.state.popularMovies;
    return (
      <div className="App">
        <NavBar/>
        <div>
          <h1>Popular Movies</h1>
          <MovieCard className={styles.MovieCard} data={populMovie}/>
        </div>

      </div>
    )
  }

}

export default App;
