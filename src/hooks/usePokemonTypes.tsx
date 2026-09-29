import { useEffect, useState } from "react";
import getPokemonsTypes from "../services/pokemonTypes/getPokemonTypes";
import type IPokemonTypes from "../types/pokemon-types";


function usePokemonTypes():IPokemonTypes[] {

    const [types, setTypes] = useState<IPokemonTypes[]>([])

    
    useEffect(() => {
        getPokemonsTypes().then((data) => setTypes(data))
    }, [])


    return types

}

export default usePokemonTypes