//import {dotenv} from 'react-dotenv'

const apiKey = import.meta.env.VITE_API_KEY

export const searchMovies = async ({search}) => {
    if (search === '') return null
    console.log(apiKey)

    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${search}`)
        const json = await response.json()

        const movies = json.Search
        return movies?.map(movie => ({
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year,
          poster: movie.Poster
        }))
    } catch (e) {
        throw new Error('Error searching movies') //ToDo manejo de errores
    }

}    
