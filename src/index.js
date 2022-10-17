// fetch('https://pokeapi.co/api/v2/pokemon/2')
//   .then(response => {
//     console.log(response.json);
//     return response.json();
//   })
//   .then(pokemon => {
//     console.log(pokemon);
//   })
//   .catch(error => {
//     console.log(error);
//   });

////////////////////////////////////////////////////////////////////

// const refs = {
//   cardContainer: document.querySelector('.country-info'),
//   searchBox: document.querySelector('#search-box'),
// };

// // refs.form.addEventListener('input', throttle(onFormInput, 500));
// refs.searchBox.addEventListener('input', onInput);

// function onInput(event) {
//   event.preventDefault();

//   const inputSearch = event.target.value;
//   console.log(inputSearch);

//   fetchPocemon(inputSearch)
//     .then(renderPocemonCard)
//     .catch(onFetchError)
//     .finally(() => inputSearch.reset());

//   //   const formJSON = JSON.stringify(formData);

//   //   localStorage.setItem(STORAGE_KEY, formJSON);
// }

// function fetchPocemon(pokemonId) {
//   const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
//   return fetch(url).then(response => response.json());
// }

// function renderPocemonCard(pokemon) {
//   const markup = pocemonCardTpl(pokemon);
//   refs.cardContainer.innerHTML = markup;
// }

// function onFetchError(error) {
//   alert('Oops, there is no country with that name');
// }

import './css/styles.css';
import API from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const refs = {
  cardContainer: document.querySelector('.country-info'),
  searchBox: document.querySelector('#search-box'),
};

refs.searchBox.addEventListener('input', onInput);

function onInput(event) {
  event.preventDefault();

  const inputSearch = event.currentTarget.value;
  console.log(inputSearch);

  API.fetchName(inputSearch)
    .then(renderPocemonCard)
    .catch(onFetchError)
    .finally(() => inputSearch.reset());
}

function renderPocemonCard(name) {
//   const markup = pocemonCardTpl(name);
//   refs.cardContainer.innerHTML = markup;
}

function onFetchError(error) {
  alert('Oops, there is no country with that name');
}
