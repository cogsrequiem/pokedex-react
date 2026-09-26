// import getPokemons from "../services/pokemons/getPokemons"

import usePokemons from "../hooks/usePokemons"



export default function DisplayPokemon() {


        const pokemons = usePokemons()

        console.log(pokemons)
    return ( <>


     {pokemons.map(pokemon => 
     <div >
        <img src={`https://pokemon-api-xidv.onrender.com/${pokemon.imgSrc}`} alt={pokemon.name.english} />

        <div>
            <p> {pokemon.id}</p>
            <h1 key={pokemon}>{pokemon.name.english}</h1>
        </div>
        
        <div>
            <h2>{pokemon.type[0]}</h2>
            {pokemon.type[1] && <h2>{pokemon.type[1]}</h2>}
        </div>
        
     </div>
     )}
    </>)
}