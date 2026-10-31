import type IPokemonTypes from "../../types/pokemon-types"


async function getPokemonsTypes():Promise<IPokemonTypes[]> {


    const res = await fetch("https://pokemon-api-xidv.onrender.com/types")
    return res.json()
}

export default getPokemonsTypes