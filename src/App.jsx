import './App.css';
import responseMovies from './mocks/with-results.json';
//import withoutResults from './mocks/no-results.json';
import { Movies } from './components/Movies';

function App() {

  const movies = responseMovies.Search
  
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
           <Movies movies={movies} />
          }
        </main>
      </div>
    </>
  )
}

export default App
