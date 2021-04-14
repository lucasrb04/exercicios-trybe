// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const renderJoke = (joke) => {
  const h2 = document.querySelector('h2');
  h2.innerHTML = joke;
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then((joker) => {
      renderJoke(joker.joke)
    })
};

window.onload = () => fetchJoke();