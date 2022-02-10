import { getExistingPokemons } from "/js/components/catchFunction.js";

const API = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=1118";
const pokeContainer = document.querySelector(".pokemons");

const catchingPokemons = getExistingPokemons();

async function getPokemon() {
  try {
    const response = await fetch(API);
    const responseJSON = await response.json();
    const pokemonData = responseJSON.results;

    pokeContainer.innerHTML = "";
    for (let i = 0; i < pokemonData.length; i++) {
      let cssClass = "gotcha";

      const doesPokeExist = catchingPokemons.find(function (fav) {
        return parseInt(fav.id) === [i];
      });

      if (doesPokeExist) {
        cssClass = "success";
      }

      pokeContainer.innerHTML += `<li>
      <span class="pokemon-banner">${pokemonData[i].name}</span>
      <span class="${cssClass}" data-id="${[i]}" data-name="${
        pokemonData[i].name
      }"></span>
      </div>`;
    }
  } catch (error) {
    console.log("Problem with API", error);
  }
  const catchedButton = document.querySelectorAll("ul .gotcha");

  catchedButton.forEach((button) => {
    button.addEventListener("click", handleClick);
  });
  function handleClick(event) {
    this.classList.toggle("success");
    this.classList.toggle("gotcha");

    const id = this.dataset.id;
    const name = this.dataset.name;

    const catchedPokemons = getExistingPokemons();

    const pokemonExist = catchedPokemons.find(function (fav) {
      return fav.id === id;
    });
    savePokemons;
    if (!pokemonExist) {
      const catched = { id: id, name: name };
      catchedPokemons.push(catched);
      savePokemons(catchedPokemons);
    } else {
      const newCatch = catchedPokemons.filter((fav) => fav.id !== id);
      savePokemons(newCatch);
    }
  }
}

getPokemon();

// Learn more about 'await', 'JSON', 'async', 'fetch'

function savePokemons(catches) {
  localStorage.setItem("catched", JSON.stringify(catches));
}
