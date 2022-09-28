export async function getLogin () {
    let listPokmn = [];
    try {
   const payload = await fetch('https://pokeapi.co/api/v2/pokemon')
     payload.json()
     .then((data) => {
        listPokmn.push(data.results)        
     })
    }
    catch (error) {
        console.error(error);
    }
    return listPokmn;
}