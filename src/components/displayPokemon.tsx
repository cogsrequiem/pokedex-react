import '../App.css'
import type DisplayPokemonProps from '../types/display-pokemon'


const skeletonNumber = [1,2,3,4,5,6,7,8,9,10,11,12]



export default function DisplayPokemon(props: DisplayPokemonProps) {


        
    return ( <>
     {props.isLoading ? 
    
        
        skeletonNumber.map( skeleton =>
            <div key={skeletonNumber.indexOf(skeleton)} className="sk-stage shimmer" role="status" aria-busy="true">
        <span className="sk-sr-only">Loading…</span>
        <div className="sk-card" aria-hidden="true">
          
                <div className="sk sk-thumb"></div>
                    <div className="sk-body">
                        <div className="sk sk-line sk-w-50"></div>
                        <div className="sk sk-line sk-title"></div>
                        <div className="sk sk-line sk-w-70"></div>
                    
                        <div className="sk-meta">
                            <div className="sk sk-line sk-w-50"></div>
                        </div>
                </div>
            
                
        </div>
        </div>
        )

     :
      props.pokemons.map(pokemon => 
     <div key={pokemon.id} className='pokemon-card'>
        <img src={`https://pokemon-api-xidv.onrender.com/${pokemon.imgSrc}`} className="img-pokemon" alt={pokemon.name.english} />

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