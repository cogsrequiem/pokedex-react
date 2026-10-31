import '../App.css'
import type FilterTypesButtonsProps from '../types/filter-types-buttons'

export default function FilterTypesButtons({activeType, pokemonTypes, handleClick}: FilterTypesButtonsProps) {


    return (<>

            <section className="section-flex">
                <button className={`pokemon-type All ${activeType === "All" ? "active" : ""} button-type"`} onClick={(e) => handleClick(e)} value="All">All</button>
                {pokemonTypes.map( type => 
                  <button onClick={handleClick} className={`pokemon-type ${type.english} ${activeType === type.english ? "active" : ""} button-type`} value={type.english} key={type.english} >{type.english}</button>  
                )}
            </section>

        </>)
}