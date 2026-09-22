
function GetPokemons(){


    async function getData() {
    const result = await fetch("https://pokemon-api-xidv.onrender.com/pokemons");
    const data = await result.json()
  
    console.log(data)
}

getData()
 
    return( <>

    
    </>)
}

export default GetPokemons