import type Pokemons from "../../types/pokemons";


async function getPokemons(): Promise<Pokemons[]>{

        
      const res = await fetch("https://pokemon-api-xidv.onrender.com/pokemons");
    return res.json();

    
}



export default getPokemons