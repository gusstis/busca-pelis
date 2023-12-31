import './App.css';
import { Movies } from './components/Movies';
import {useMovies} from './hooks/useMovies'
import {useState, useEffect, useRef, useCallback} from 'react';
import debounce from 'just-debounce-it';

function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('No se puede buscar una peli vacía')
      return
    }
    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una peli con nro')
      return
    }
    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }
    setError(null)
  }, [search])
  return { search,updateSearch, error }
}

function App() {
  const [sort, setSort ] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies,loading, getMovies } = useMovies({search, sort})

  const debouncedGetMovies = useCallback(
    debounce(search => {
    console.log('search', search)
    getMovies({search})
  }, 300)
  , [getMovies]) //en realidad no hace falta agregar getMovies as dependecy, no cambia

  const handleSubmit = (event ) => {
    event.preventDefault()
      getMovies({search})
  }

 const handleSort = () => {
   setSort(!sort)
 }

  const handleChange = (event) => {
    const newSearch = (event.target.value)
    updateSearch(newSearch)
    debouncedGetMovies( newSearch )
  }
  
  return (
    <>
      <div className='page' >
        <header>
        <h1>Busca Pelis Ultimate!!</h1>
          <form className='form' onSubmit={handleSubmit} >
            <input
              style={{
               border:'1px solid transparent',
               borderColor: error ? 'red' : 'transparent'
              }}
              onChange={handleChange}
              name='query'
              value={search}
              placeholder='Avengers, Sounds of freedom. etc...'
            />
            <input type="checkbox" onChange={handleSort} checked={sort} />
            <button  type="submit">Buscar</button>
          </form>
          {error && <p style={{color: 'red'}}>{error}</p>}
        </header>
        <main>
              {
                loading ? <p>Cargando...</p> : <Movies movies={movies} />
              }
           
        </main>
      </div>
    </>
  )
}

export default App
