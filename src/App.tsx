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
  const pokemonTypes= usePokemonTypes()
  const [activeType, setActiveType] = useState('All')
 

  const filtered = activeType === "All"
  ? pokemons
  :pokemons.filter((pokemon) => pokemon.type.includes(activeType))


  function handleClickType(e: React.MouseEvent<HTMLButtonElement>) {
    setActiveType(e.currentTarget.value)
  }

  return (
    <>
    <header>
      <nav>
        <FilterTypesButtons handleClick={handleClickType} pokemonTypes={pokemonTypes}/>
        <SearchingBar/>
        <SortingButtons/>
      </nav>
    </header>
    <main>
      <DisplayPokemon pokemons={filtered}/>
    </main>
    
    </>
  )
}

export default App
