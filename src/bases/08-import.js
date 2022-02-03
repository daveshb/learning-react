// import {heroes} from './data/heroes';

//LEctura
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find

import { heroes } from "../data/heroes";

// import {heroes} from './data/heroes';  // copiar imp + tab



//console.log(heroes);





// Encontrar un objeto en un array por una de sus propiedades

// const getHeroeByID = (num) => {
//     return  num.id == 2;
// }

// console.log(heroes.find(getHeroeByID));




// Encontrar un objeto en un array por una de sus propiedades(Otra forma )

//  const getHeroeByID = (id) => {
//      return  heroes.find((heroe)=>{
//          if(heroe.id === id){
//              return true;
//          }
//      });
//  }
//  console.log(getHeroeByID(2) );


 // Encontrar un objeto en un array por una de sus propiedades(Otra forma mejor)


export const getHeroeByID = (id) =>  heroes.find((heroe)=> heroe.id === id);
 
// console.log(getHeroeByID(3) );


//FILTRO    
export const getHeroesByOwner = (owner) => heroes.filter((own)=> own.owner === owner);
// console.log(getHeroesByOwner('DC'));


