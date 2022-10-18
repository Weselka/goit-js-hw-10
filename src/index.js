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
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const refs = {
  countryList: document.querySelector('.country-list'),
  container: document.querySelector('.country-info'),
  searchBox: document.querySelector('#search-box'),
};

refs.searchBox.addEventListener('input', onInput);

// textInput.addEventListener('focus', () => {
//   textInput.value = 'This input has focus';
// });

// textInput.addEventListener('blur', () => {
//   textInput.value = '';
// });document.activeElement.

function onInput(event) {
  event.preventDefault();

  const inputSearch = event.currentTarget.value;
  console.log(inputSearch);

  fetchCountries(inputSearch).then(renderCountryList).catch(onFetchError);
  //.finally(() => inputSearch.reset());
}

function renderCountryList(country) {
  // return arr
  //   .map(
  //     country =>
  //       `<li>
  //     <h2>Country:${name.official}</h2>
  //     <p>Capital: ${capital}</p>
  //     <p>Population: ${population}</p>
  //     <img src="${flags.svg}" alt="flags">
  //     <p>Languages: ${languages}</p></li>`
  //   )
  //   .join('');
  const markup = countryCardTpl(country);
  refs.countryList.innerHTML = markup;
}

function countryCardTpl(arr) {
  return arr
    .map(
      country =>
        `<li>
      <h2>Country:${name.official}</h2>
      <p>Capital: ${capital}</p>
      <p>Population: ${population}</p>
      <img src="${flags.svg}" alt="flags">
      <p>Languages: ${languages}</p></li>`
    )
    .join('');
}

function onFetchError(error) {
  alert('Oops, there is no country with that name');
}
