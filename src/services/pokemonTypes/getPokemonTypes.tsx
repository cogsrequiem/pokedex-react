

async function getPokemonsTypes() {


    const res = await fetch("https://pokemon-api-xidv.onrender.com/types")
                           

    return await res.json()
}

export default getPokemonsTypes