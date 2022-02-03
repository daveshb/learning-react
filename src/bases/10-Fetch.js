
//LECTURA
// https://developer.mozilla.org/es/docs/Web/API/Fetch_API

//GIFT animados
//https://developers.giphy.com/


// Fetch API


const apiKey = 'e8SCLsFR1Bi7aaMNLnCFuH174PmnaSJM';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
.then(resp => resp.json() )
.then(({data}) => {
//   const { url } = data.images.original.url;
//   console.log(url)
const url =data.images.original.url;
const img = document.createElement('img');
img.src= url;

document.body.append(img);
})
.catch(console.warn);