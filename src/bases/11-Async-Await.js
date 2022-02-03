// Async - Await

// ================ASYNC========================

// const getImagen = async() =>{
//     return 'https://Algoooo.com';
// };
// getImagen()
// .then(console.log)
// .catch(console.warn);

// =================================================



const getImagen = async() =>{

try {
    const apiKey = 'e8SCLsFR1Bi7aaMNLnCFuH174PmnaSJM';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await resp.json();

    const { url } = data.images.original;
    console.log(url);
    const img = document.createElement('img');
     img.src= url;
    
     document.body.append(img);

} catch (error){
// Manejo del error.
console.error(error);
}   
}

getImagen();



// 

// peticion
// .then(resp => resp.json() )
// .then(({data}) => {
// //   const { url } = data.images.original.url;
// //   console.log(url)
// const url =data.images.original.url;
// const img = document.createElement('img');
// img.src= url;

// document.body.append(img);
// })
// .catch(console.warn)

