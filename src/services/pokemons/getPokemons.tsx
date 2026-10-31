import type IPokemons from "../../types/pokemons";


async function getPokemons(): Promise<IPokemons[]>{

        
      const res = await fetch("https://pokemon-api-xidv.onrender.com/pokemons");
    return res.json();

    
}



export default getPokemons