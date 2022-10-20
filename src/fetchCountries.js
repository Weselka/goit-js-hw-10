const BASE_URL = 'https://restcountries.com/v3.1'

export function fetchCountries(name) {
  const url = `${BASE_URL}/name/${name}?name.official&capital&population&flags.svg&languages`;
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error()
    };
    return response.json()
  });
}