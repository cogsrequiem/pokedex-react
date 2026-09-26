

async function getPokemons(){

        
      const res = await fetch("https://pokemon-api-xidv.onrender.com/pokemons");
    return res.json();

    
}



export default getPokemons