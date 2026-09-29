import type PokemonTypes from "../../types/pokemon-types"


async function getPokemonsTypes():Promise<PokemonTypes[]> {


    const res = await fetch("https://pokemon-api-xidv.onrender.com/types")
    return res.json()
}

export default getPokemonsTypes