import { useEffect, useState } from "react";
import getPokemonsTypes from "../services/pokemonTypes/getPokemonTypes";


function usePokemonTypes() {

    const [types, setTypes] = useState([])

    
    useEffect(() => {
        getPokemonsTypes().then((data) => setTypes(data))
    }, [])

    return types

}

export default usePokemonTypes