const URL = "https://pokeapi.co/api/v2/pokemon-species/";
const container = document.querySelector(".container");

fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.results);
    container.innerHTML = "";
    const pokemonArray = data.results;
    for (let i = 0; i < pokemonArray.length; i++) {
      console.log(pokemonArray[i]);
      container.innerHTML += `<div>${pokemonArray[i].results}</div>`;
    }
  })
  .catch((error) => {
    console.log(error);
  });

// https://pokeapi.co/api/v2/pokemon?offset=20&limit=1118
