import {useState} from 'react'
import {searchMovies} from '../services/movies';

export function useMovies ({search}) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const getMovies = async () => {
      try {
        setLoading(true)
        setError(null)
        const newMovies = await searchMovies({search})
      setMovies(newMovies)
      } catch (e) {
        setError(e.message)
      } finally {
        //esto se ejecuta tanto en el try como en el catch
        setLoading(false)
      }
    }
    return { movies, getMovies, loading } // En movies tendremos las pelis, en getMovies tenemos la forma de recuperar las pelis
}