import usePokemonTypes from "../hooks/usePokemonTypes"

export default function FilterTypesButtons() {

        const pokemonTypes = usePokemonTypes()
    

    return (<>

            <section>
                {pokemonTypes.map( type => 
                  <button key={type.english}>{type.english}</button>  
                )}
            </section>

        </>)
}