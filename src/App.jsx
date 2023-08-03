import './App.css'

function App() {

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
          Acá salen los results
        </main>
      </div>
    </>
  )
}

export default App
