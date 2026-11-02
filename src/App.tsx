import { useEffect, useState } from 'react'
import './App.css'
import DisplayPokemon from './components/displayPokemon'
import FilterTypesButtons from './components/filterTypesButtons'
import SearchingBar from './components/searchingBar'
import SortingButtons from './components/sortingButtons'
import usePokemons from './hooks/usePokemons'
import usePokemonTypes from './hooks/usePokemonTypes'




function App() {
  const response= usePokemons();
  const pokemonTypes= usePokemonTypes();
  const [activeType, setActiveType] = useState('All');
  const [activeMode, setActiveMode] = useState("Reset");
  const [search, setSearch] = useState("");

  const filtered = activeType === "All"
  ? (response.pokemons)
  :(response.pokemons.filter((pokemon) => pokemon.type.includes(activeType)));

  const sortedPokemons = activeMode === "Reset"
  ? (filtered)
  : (activeMode === "A-Z") ? AzSorting(filtered) : ZaSorting(filtered);

  const displayed = search.length ? sortedPokemons.filter((pokemon) => {
      return pokemon.name.english.toLowerCase().includes(search)}) : sortedPokemons



  function handleClickType(e: React.MouseEvent<HTMLButtonElement>) :void{
    setActiveType(e.currentTarget.value)
  }

  function handleClickSort(e: React.MouseEvent<HTMLButtonElement>) :void{
    setActiveMode(e.currentTarget.innerText) 
  }

  function AzSorting(pokemons) {
    return pokemons.toSorted((a, b) => a.name.english.localeCompare(b.name.english));
  }

  function ZaSorting(pokemons) {
    return pokemons.toSorted((a, b) => b.name.english.localeCompare(a.name.english));
  }

  const handleInputChange = (e)  => {
    const searchPokemon = e.target.value.toLowerCase()

    setSearch(searchPokemon)

    console.log("searchPokemon",search)

  }
  



  return (
    <>
    <header>
      <nav className="nav-sort">
        <FilterTypesButtons activeType={activeType} handleClick={handleClickType} pokemonTypes={pokemonTypes}/>
        <SearchingBar onChange={handleInputChange} value={search} />
        <SortingButtons activeMode={activeMode} handleClick={handleClickSort}/>
      </nav>
    </header>
    <main className="container-pokedex">

         <DisplayPokemon isLoading={response.isLoading} pokemons={displayed}/>
    </main>
    
    </>
  )
}

export default App
