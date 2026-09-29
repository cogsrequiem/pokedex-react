import '../App.css'


export default function DisplayPokemon(props) {


        
    return ( <>
     {props.pokemons.map(pokemon => 
     <div key={pokemon.id} className='pokemon-card'>
        <img src={`https://pokemon-api-xidv.onrender.com/${pokemon.imgSrc}`} className="img-pokemon" alt={pokemon.name.english} />

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