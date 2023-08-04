import './App.css';
import { Movies } from './components/Movies';
import {useMovies} from './hooks/useMovies';

function App() {
  const { movies : mappedMovies } = useMovies()
  
  
  return (
    <>
      <div className='page' >
        <header>
      <h1>Busca Pelis Ultimate!!</h1>
          <form action="">
            <input
              type="text"
              placeholder='Avengers, Sounds of freedom. etc...'
            />
            <button type="submit">Buscar</button>
          </form>
        </header>
        <main>
          {
           <Movies movies={mappedMovies} />
          }
        </main>
      </div>
    </>
  )
}

export default App
