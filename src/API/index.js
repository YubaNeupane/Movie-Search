import axios from 'axios'
const apiKey = 'api_key=dc431dc887ae9c4133d35d16320bced8'
const url = 'https://api.themoviedb.org/3/movie'
const movieSearchUrl = 'https://api.themoviedb.org/3/search/movie?'
const searchParm = ['/popular?','&query=']

export const fetchPopularMovies = async () =>{
    try {
        const {data} = await axios.get(`${url + searchParm[0]+apiKey}`)
        //console.log(data.results)
        return data.results
    } catch (error) {
        console.log(error)
    }
}

export const searchMovieByName = async (name) =>{
    if(name !== ""){
        let searchUrl = movieSearchUrl + apiKey + searchParm[1]+name
        try {
            const {data} = await axios.get(searchUrl)
            //console.log(data.results)
            return data.results
        } catch (error) {
            console.log(error)
        }
    }

}
