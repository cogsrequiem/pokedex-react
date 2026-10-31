import '../App.css'
import type DisplayPokemonProps from '../types/display-pokemon'




export default function DisplayPokemon(props: DisplayPokemonProps) {


        
    return ( <>
     {props.pokemons.map(pokemon => 
     <div key={pokemon.id} className='pokemon-card'>
        <img src={`https://pokemon-api-xidv.onrender.com/${pokemon.imgSrc}`} loading="lazy" className="img-pokemon" alt={pokemon.name.english} />

        <div>
            <p className="pokemon-number"> {pokemon.id}</p>
            <p className="pokemon-name">{pokemon.name.english}</p>
        </div>
        
        <div className='type-container'>
            <p className={`pokemon-type ${pokemon.type[0]}`}>{pokemon.type[0]}</p>
            {pokemon.type[1] && <p className={`pokemon-type ${pokemon.type[1]}`}>{pokemon.type[1]}</p>}
        </div>
        
     </div>
     )}
    </>)
}