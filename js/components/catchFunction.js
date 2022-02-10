export function getExistingPokemons() {
  const catched = localStorage.getItem("catched");

  if (!catched) {
    return [];
  } else {
    return JSON.parse(catched);
  }
}
