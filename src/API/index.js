import axios from 'axios'
const apiKey = 'api_key=dc431dc887ae9c4133d35d16320bced8'
const url = 'https://api.themoviedb.org/3/movie'
const searchParm = '/popular?'

export const fetchPopularMovies = async () =>{
    try {
        const {data} = await axios.get(`${url + searchParm+apiKey}`)
        //console.log(data.results)
        return data.results
    } catch (error) {
        console.log(error)
    }
}