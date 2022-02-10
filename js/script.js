import { getExistingPokemons } from "/js/components/catchFunction.js";

const API = "https://pokeapi.co/api/v2/pokemon?&limit=1118";
const pokeContainer = document.querySelector(".pokemons");

const catchingPokemons = getExistingPokemons();

const myCatchedPokemon = JSON.parse(localStorage.getItem("catched"));
console.log(myCatchedPokemon);

async function getPokemon() {
  try {
    const response = await fetch(API);
    const responseJSON = await response.json();
    const pokemonData = responseJSON.results;

    pokeContainer.innerHTML = "";
    for (let i = 0; i < pokemonData.length; i++) {
      let cssClass = "gotcha";

      // const doesPokeExist = myCatchedPokemon.find(function (fav) {
      //   // return parseInt(fav.id) === [i];
      //   return fav.id === pokemonData[i];
      // });
      // console.log(doesPokeExist);

      // if (doesPokeExist) {
      //   cssClass = "success";
      // }
      if (myCatchedPokemon && myCatchedPokemon.length > 0) {
        for (let j = 0; j < myCatchedPokemon.length; j++) {
          console.log(myCatchedPokemon[j]);
          const singleCatchedPokemonName = myCatchedPokemon[j].name;
          console.log(singleCatchedPokemonName);
          console.log(pokemonData[i].name);
          if (singleCatchedPokemonName === pokemonData[i].name) {
            cssClass = "success";
          }
        }
      }

      pokeContainer.innerHTML += `<li>
      <span class="pokemon-banner"><a href="pokemon-details.html?name=${
        pokemonData[i].name
      }">${pokemonData[i].name}</a></span>
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
