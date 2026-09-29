import { useEffect, useState } from 'react'
import './App.css'
import DisplayPokemon from './components/displayPokemon'
import FilterTypesButtons from './components/filterTypesButtons'
import SearchingBar from './components/searchingBar'
import SortingButtons from './components/sortingButtons'
import usePokemons from './hooks/usePokemons'
import usePokemonTypes from './hooks/usePokemonTypes'



function App() {
  const pokemons = usePokemons();
  const pokemonTypes = usePokemonTypes()

  const [filtered, setFiltered] = useState(pokemons)




  useEffect(() => {
    setFiltered(pokemons)
  }, [pokemons])

  function handleClickType(e) {

    const filterType = e.target.value
    console.log(filterType)

     setFiltered(() => pokemons.filter((pokemon) => 
    pokemon.type.includes(filterType)))

    
  }
 

  console.log(filtered)
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
