import { useEffect, useState } from "react";
import getPokemonsTypes from "../services/pokemonTypes/getPokemonTypes";
import type IPokemonTypes from "../types/pokemon-types";


function usePokemonTypes():{types:IPokemonTypes[], isLoading: boolean}{

    const [types, setTypes] = useState<IPokemonTypes[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true)

    
    useEffect(() => {
        getPokemonsTypes()
        .then((data) => setTypes(data))
        .catch((err) => {
            console.error(err)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [])

    const returnTypes = {types, isLoading}

    return returnTypes

}

export default usePokemonTypes