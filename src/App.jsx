import './App.css';
import { Movies } from './components/Movies';
import {useMovies} from './hooks/useMovies'
import {useState, useEffect, useRef} from 'react';

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
  const { search, updateSearch, error } = useSearch()
  const { movies,loading, getMovies } = useMovies({search})

  const handleSubmit = (event ) => {
    event.preventDefault()
      getMovies()
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)

  }
  
  return (
    <>
      <div className='page' >
        <header>
      <h1>Busca Pelis Ultimate!!</h1>
          <form className='form' onSubmit={handleSubmit} action="">
            <input
              style={{
               border:'1px solid transparent',
               borderColor: error ? 'red' : 'transparent' 
              }}
              onChange={handleChange}
              name='query'
              value={search}
              type="text"
              placeholder='Avengers, Sounds of freedom. etc...'
            />
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
