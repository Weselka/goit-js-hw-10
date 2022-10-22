import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
// const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

const refs = {
  countryList: document.querySelector('.country-list'),
  container: document.querySelector('.country-info'),
  searchBox: document.querySelector('#search-box'),
};

refs.searchBox.addEventListener(
  'input',
  debounce(onInputSearch, DEBOUNCE_DELAY)
);

function onInputSearch(event) {
  event.preventDefault();

  const inputSearch = event.target.value.trim().toLowerCase();
  console.log(inputSearch);

  if (inputSearch.length === 0) {
    return alert('Enter country');
  }
  
  fetchCountries(inputSearch).then(country => {
    clearMarkup()
    if (country.length === 1) {
      renderCountryItem(country);
    } else if (country.length >= 2 && country.length <= 10) {
      renderCountryList(country);
    } else {
      alert('Too many countries')
    }
  }).catch(onFetchError);
  //.finally(() => inputSearch.reset());
}

function clearMarkup () {
  refs.container.innerHTML = '';
  refs.countryList.innerHTML = '';
}

function renderCountryItem([{ name, capital, population, flags, languages }]) {
  const markupCard = `<div>
  <img src="${flags.svg}" alt="flags" width=100>
      <h2>Country: ${name.official}</h2>
      <p>Capital: ${capital}</p>
      <p>Population: ${population}</p>      
      <p>Languages: ${Object.values(languages).join(', ')}</p></div>`;
  refs.container.innerHTML = markupCard;
}

function renderCountryList(country) {
  console.log(country);
  const markup = country
    .map(
      ({ name, flags }) =>
        `<li>
      <h2>Country:${name.common}</h2>
      <img src="${flags.svg}" alt="flags" width=30>`
    )
    .join('');
  refs.countryList.innerHTML = markup;
}

function onFetchError(error) {
  alert('Oops, there is no country with that name');
}
