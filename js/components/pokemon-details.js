const queryString = document.location.search;
const params = new URLSearchParams(queryString);

// console.log(params);
// console.log(params.get("name"));

const pokemonName = params.get("name");
const API_URL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
const heading = document.querySelector("h1");

// console.log(API_URL);
const pokemonDetailNumber = document.querySelector(".pokemon-detail-number");
const pokemonDetails = document.querySelector(".pokemon-detail");

async function getPokemonDetails() {
  try {
    const response = await fetch(API_URL);
    const singlePokeDetails = await response.json(); // JSON data
    console.log("singlePokeDetails", singlePokeDetails); //TODO: Shows all DATA you can play with
    const pokemonWeight = singlePokeDetails.weight;
    console.log(pokemonWeight);
    pokemonDetails.innerHTML = `
    <li class="detail-heading">${pokemonName}:</li>
    <li>
    <span class="${pokemonDetailNumber}">The Pokemons weight is: <span class="important-detail">${pokemonWeight}</span> lbs.</span>
    </li>`;
    heading.innerHTML += ` ${pokemonName}`;
  } catch (error) {
    console.log(error);
  }
}

getPokemonDetails();
