import '../App.css'
import type FilterTypesButtonsProps from '../types/filter-types-buttons'

export default function FilterTypesButtons(props: FilterTypesButtonsProps) {


    const skeletonNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]

  
    return (<>


        {
            props.isLoadingTypes && props.isLoading ? 

             <section className="section-flex"> 
             {skeletonNumber.map(skeleton =>
                <div key={skeletonNumber.indexOf(skeleton)} className="skl" role="status">
                    <span className="skl-sr-only">Chargement…</span>
                    <div className="skl-bar" aria-hidden="true" />
                </div>
             )  }                    
                
            </section>  
                     :
            <section className="section-flex">
                
                <button className={`pokemon-type All ${props.activeType === "All" ? "active" : ""} button-type`} onClick={(e) => props.handleClick(e)} value="All">All</button>
                {props.pokemonTypes.map( type => 
                  <button onClick={props.handleClick} className={`pokemon-type ${type.english} ${props.activeType === type.english ? "active" : ""} button-type`} value={type.english} key={type.english} >{type.english}</button>  
                )}
            </section>
        }
            

        </>)
}