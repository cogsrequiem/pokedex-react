import '../App.css'

export default function FilterTypesButtons({pokemonTypes, handleClick}) {

        
    

    return (<>

            <section>
                <button className="pokemon-type All button-type">All</button>
                {pokemonTypes.map( type => 
                  <button onClick={(e) =>handleClick(e)} className={`pokemon-type ${type.english} button-type`} value={type.english} key={type.english} >{type.english}</button>  
                )}
            </section>

        </>)
}