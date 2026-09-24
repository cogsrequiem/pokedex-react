

async function getPokemons(){

        
      const res = await fetch("https://pokemon-api-xidv.onrender.com/pokemons");
    return await res.json();

    
}



export default getPokemons