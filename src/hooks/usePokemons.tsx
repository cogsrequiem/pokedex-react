import { useEffect, useState } from "react"
import getPokemons from "../services/pokemons/getPokemons.tsx"
import type IPokemons from "../types/pokemons.ts"



function usePokemons():{pokemons:IPokemons[], isLoading: boolean}{
    const [pokemons, setPokemons] = useState<IPokemons[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {

        getPokemons()
        .then((data) => {
             setPokemons(data)
        })
        .catch((err) => {
            console.error(err)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [])

      const res = {pokemons, isLoading}
      
    return res
}

export default usePokemons