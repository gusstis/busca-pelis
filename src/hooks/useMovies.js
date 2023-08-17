import {useRef, useState, useMemo, useCallback} from 'react'
import {searchMovies} from '../services/movies';

export function useMovies ({search, sort}) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previousSearch = useRef(search)
    // No se estaría usando el error
  
    const getMovies = useCallback (async ({search}) => {
      if ( search === previousSearch.current ) return
      // search es ''
      try {
        setLoading(true)
        setError(null)
        //Antes de hacer la llamada, actualizamos el previousSearch
        previousSearch.current = search
        const newMovies = await searchMovies({search})
      setMovies(newMovies)
      } catch (e) {
        setError(e.message)
      } finally {
        //esto se ejecuta tanto en el try como en el catch
        setLoading(false)
      }
  }, [])

    /*{const getSortedMovies = () => {
      console.log('getSortedMoviessss')
      const sortedMovies = sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title) )
      : movies
      return sortedMovies
    }}*/
    const sortedMovies = useMemo(() => {
      return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title) )
      : movies
    }, [sort, movies])
    return { movies: sortedMovies, getMovies, loading } // En movies tendremos las pelis, en getMovies tenemos la forma de recuperar las pelis
}