import { useEffect, useState } from "react"
import getPokemons from "../services/pokemons/getPokemons.tsx"
import type IPokemons from "../types/pokemons.ts"



function usePokemons():IPokemons[] {
    const [pokemons, setPokemons] = useState<IPokemons[]>([])

    useEffect(() => {
        
        getPokemons().then((data) => 
            setPokemons(data))
    }, [])


    return pokemons
}

export default usePokemons