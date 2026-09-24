import { useEffect, useState } from "react"
import getPokemons from "../services/pokemons/getPokemons.tsx"


function usePokemons() {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        
        getPokemons().then((data) => 
            setPokemons(data))
    }, [])

    console.log(pokemons)

    return pokemons


}

export default usePokemons