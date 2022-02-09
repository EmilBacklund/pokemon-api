const API = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=1118";
const pokeContainer = document.querySelector(".pokemons");

async function getPokemon() {
  try {
    const response = await fetch(API);
    const responseJSON = await response.json();
    const pokemonData = responseJSON.results;
    pokeContainer.innerHTML = "";
    for (let i = 0; i < pokemonData.length; i++) {
      pokeContainer.innerHTML += `<li><span>${pokemonData[i].name}</span></div>`;
    }
  } catch (error) {
    console.log("Problem with API", error);
  }
}

getPokemon();

// Learn more about 'await', 'JSON', 'async', 'fetch'
