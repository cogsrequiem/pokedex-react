import { useState } from 'react'
import './App.css'
import DisplayPokemon from './components/displayPokemon'
import FilterTypesButtons from './components/filterTypesButtons'
import SearchingBar from './components/searchingBar'
import SortingButtons from './components/sortingButtons'
import usePokemons from './hooks/usePokemons'
import usePokemonTypes from './hooks/usePokemonTypes'
import ShowMore from './components/showmoreButton'
import type IPokemons from './types/pokemons'





function App() {
  const response= usePokemons();
  const pokemonTypes= usePokemonTypes();
  const [activeType, setActiveType] = useState('All');
  const [activeMode, setActiveMode] = useState("Reset");
  const [search, setSearch] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState(30);





  const filtered = activeType === "All"
  ? (response.pokemons)
  :(response.pokemons.filter((pokemon) => pokemon.type.includes(activeType)));

  const sortedPokemons = activeMode === "Reset"
  ? (filtered)
  : (activeMode === "A-Z") ? AzSorting(filtered) : ZaSorting(filtered);

  const displayed = search.length ? sortedPokemons.filter((pokemon: IPokemons) => {
      return pokemon.name.english.toLowerCase().includes(search)}) : sortedPokemons

    const visibleInternal = displayed.slice(0, visibleCount )
    console.log(visibleInternal)


  function handleClickType(e: React.MouseEvent<HTMLButtonElement>) :void{
    setActiveType(e.currentTarget.value)
  }

  function handleClickSort(e: React.MouseEvent<HTMLButtonElement>) :void{
    setActiveMode(e.currentTarget.innerText) 
  }

  function AzSorting(pokemons: IPokemons[]) {
    return pokemons.toSorted((a, b) => a.name.english.localeCompare(b.name.english));
  }

  function ZaSorting(pokemons: IPokemons[]) {
    return pokemons.toSorted((a, b) => b.name.english.localeCompare(a.name.english));
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>)  => {
    const searchPokemon = e.target.value.toLowerCase()

    setSearch(searchPokemon)

    console.log("searchPokemon",search)

  }
  
   function handleVisiblePokemons() {

    setVisibleCount(prevCount => prevCount + 30)
   }



  return (
    <>
    <header>
      <nav className="nav-sort">
        <FilterTypesButtons activeType={activeType} handleClick={handleClickType} isLoadingTypes={pokemonTypes.isLoading} isLoading={response.isLoading} pokemonTypes={pokemonTypes.types}/>
        <SearchingBar onChange={handleInputChange} value={search} />
        <SortingButtons activeMode={activeMode} handleClick={handleClickSort}/>
      </nav>
    </header>
    <main className="container-pokedex">

      <section className='section-pokemon-card'>
        <DisplayPokemon isLoading={response.isLoading} isLoadingTypes={pokemonTypes.isLoading} pokemons={visibleInternal}/>
      </section>
         
      {
        response.pokemons.length > visibleInternal.length &&
         <section className="show-more">
              <ShowMore handleVisiblePokemons={handleVisiblePokemons}/>
         </section>
      }
    </main>
    
    </>
  )
}

export default App
