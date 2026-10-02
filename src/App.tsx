import { useState } from 'react'
import './App.css'
import DisplayPokemon from './components/displayPokemon'
import FilterTypesButtons from './components/filterTypesButtons'
import SearchingBar from './components/searchingBar'
import SortingButtons from './components/sortingButtons'
import usePokemons from './hooks/usePokemons'
import usePokemonTypes from './hooks/usePokemonTypes'




function App() {
  const pokemons= usePokemons();
  const pokemonTypes= usePokemonTypes();
  const [activeType, setActiveType] = useState('All');
  const [activeMode, setActiveMode] = useState("Reset")

  const filtered = activeType === "All"
  ? (pokemons)
  :(pokemons.filter((pokemon) => pokemon.type.includes(activeType)))


  const sortedPokemons = activeMode === "Reset"
  ? (filtered)
  : (activeMode === "A-Z") ? AzSorting(filtered) : ZaSorting(filtered);



  function handleClickType(e: React.MouseEvent<HTMLButtonElement>) {
    setActiveType(e.currentTarget.value)
  }

  function handleClickSort(e: React.MouseEvent<HTMLButtonElement>) {
    setActiveMode(e.currentTarget.innerText) 
  }

  function AzSorting(pokemons) {
    return pokemons.toSorted((a, b) => a.name.english.localeCompare(b.name.english));
  }

  function ZaSorting(pokemons) {
    return pokemons.toSorted((a, b) => b.name.english.localeCompare(a.name.english));
  }

  return (
    <>
    <header>
      <nav>
        <FilterTypesButtons handleClick={handleClickType} pokemonTypes={pokemonTypes}/>
        <SearchingBar/>
        <SortingButtons handleClick={handleClickSort}/>
      </nav>
    </header>
    <main>


      <DisplayPokemon pokemons={sortedPokemons}/>
    </main>
    
    </>
  )
}

export default App
