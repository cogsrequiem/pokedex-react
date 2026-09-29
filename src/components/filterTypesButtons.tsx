import '../App.css'
import type FilterTypesButtonsProps from '../types/filter-types-buttons'

export default function FilterTypesButtons({pokemonTypes, handleClick}: FilterTypesButtonsProps) {

    return (<>

            <section>
                <button className="pokemon-type All button-type" onClick={(e) => handleClick(e)} value="All">All</button>
                {pokemonTypes.map( type => 
                  <button onClick={(e) =>handleClick(e)} className={`pokemon-type ${type.english} button-type`} value={type.english} key={type.english} >{type.english}</button>  
                )}
            </section>

        </>)
}