const queryString = document.location.search;
const params = new URLSearchParams(queryString);

// console.log(params);
// console.log(params.get("name"));

const pokemonName = params.get("name");
const API_URL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
const heading = document.querySelector("h1");

// console.log(API_URL);

const pokemonDetails = document.querySelector(".pokemons");

async function getPokemonDetails() {
  try {
    const response = await fetch(API_URL);
    const singlePokeDetails = await response.json(); // JSON data
    console.log("singlePokeDetails", singlePokeDetails); //TODO: Shows all DATA you can play with
    const pokemonWeight = singlePokeDetails.weight;
    console.log(pokemonWeight);
    pokemonDetails.innerHTML = `<li><span>The Pokemons weight is: ${pokemonWeight}</span></li>`;
    heading.innerHTML += ` ${pokemonName}`;
  } catch (error) {
    console.log(error);
  }
}

getPokemonDetails();
