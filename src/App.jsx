import './App.css';
import responseMovies from './mocks/with-results.json';
import withoutResults from './mocks/no-results.json';

function App() {

  const movies = responseMovies.Search
  const hasMovies = movies?.length > 0

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
            hasMovies
              ? (
                  <ul>
                    {
                      movies.map(movie => (
                        <li key={movie.imdbID} >
                          <h3> {movie.Title} </h3>
                          <p> {movie.Year} </p>
                          <img src={movie.Poster} alt={movie.Title} />
                        </li>
                      ))
                    }
                  </ul>
                ) : (
              <p>No se encontraron pelis para su búsqueda</p>
            )
          }
        </main>
      </div>
    </>
  )
}

export default App
