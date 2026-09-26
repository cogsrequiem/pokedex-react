import './App.css'
import DisplayPokemon from './components/displayPokemon'
import FilterTypesButtons from './components/filterTypesButtons'
import SearchingBar from './components/searchingBar'
import SortingButtons from './components/sortingButtons'



function App() {


  return (
    <>
    <header>
      <nav>
        <FilterTypesButtons/>
        <SearchingBar/>
        <SortingButtons/>
      </nav>
    </header>
    <main>
      <DisplayPokemon/>
    </main>
    
    </>
  )
}

export default App
