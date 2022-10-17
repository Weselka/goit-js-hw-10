const BASE_URL = 'https://restcountries.com/v3.1'

function fetchName(pokemonId) {
  const url = `${BASE_URL}/name/${pokemonId}`;
  return fetch(url).then(response => response.json());
}

export default { fetchName };