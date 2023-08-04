import './App.css';
import { Movies } from './components/Movies';
import {useMovies} from './hooks/useMovies'
import {useState, useEffect} from 'react';

function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
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
  const { movies } = useMovies()
  const { search, updateSearch, error } = useSearch()

  const handleSubmit = (event ) => {
    event.preventDefault()
      console.log({search})
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
           <Movies movies={movies} />
        </main>
      </div>
    </>
  )
}

export default App
