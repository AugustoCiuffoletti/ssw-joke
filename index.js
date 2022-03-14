// Import stylesheets
import './style.css';

const promise = new Promise((resolve, reject) => {
  const request = new XMLHttpRequest(); 
  request.open('GET', 'https://api.chucknorris.io/jokes/random',false); // Definisce la request
  request.onload = () => {	         // Definisce il callback al response
    if (request.status === 200) {        // successo, concludo con la resolve
      resolve(request.response);         // la response passa al primo callback del then
    } else {
      reject(Error(request.statusText)); // errore, lo status passa al secondo callback 
    } };
  request.send();                        // predisposto il callback, invio la request
} );
console.log('Request inviata');
promise.then(
  (data) => {        // primo callback, successo
    console.log('Got data! Promise fulfilled.');
    document.getElementById("demo").innerHTML = JSON.parse(data).value; }, 
  (error) => {       //secondo callback, fallimento (come .catch)
    console.log('Promise rejected.');
    console.log(error.message); } );
