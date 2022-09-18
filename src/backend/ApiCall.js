

fetch('https://pokeapi.co/api/v2/pokemon', {
  method: 'GET',  
})
  .then(res => {
      if(res.ok){
          console.log("Success")
  } else {
      console.log("not succesfull")
  }
  res.json()})
  .then(data => console.log(data))
  .catch(error => console.log('ERROR'))