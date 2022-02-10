import { getExistingPokemons } from "/js/components/catchFunction.js";

const catchedPokemons = getExistingPokemons();
const pokeContainer = document.querySelector(".pokemons");

if (catchedPokemons.length === 0) {
  pokeContainer.innerHTML = "No catched Pokemons yet";
}

catchedPokemons.forEach((pokemons) => {
  pokeContainer.innerHTML += `<li>
    <span class="pokemon-banner">${pokemons.name}</span>
    <span class="success"></span>
    </div>`;
});
