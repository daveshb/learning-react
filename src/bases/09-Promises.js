// LECTURA
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise

import { getHeroeByID } from './bases/08-import';
;


//Promises resolve

// const promesa = new Promise((resolve, reject)=>{

//     setTimeout(() => {
//         //Tarea
//         //importal el 
//         const heroe = getHeroeByID(2);
     

//          resolve(heroe);
//     }, 5000);

// });

// promesa.then((heroe)=>{
//     console.log('Then de la promesa',heroe );
// })


//Promises reject


// const promesa = new Promise((resolve, reject)=>{

//     setTimeout(() => {
//         //Tarea
//         //importal el 
//         const heroe = getHeroeByID(2);
     

//          reject('No se pudo encontrar el heroe');
//     }, 5000);

// });

// promesa.then((heroe)=>{
//     console.log('Then de la promesa',heroe );
// })

// .catch(err => console.warn(err));



// :::::::::::::::::::::::::::::::::::::::::::::::::



// La forma que reolvi la tarea (si dio)
// const getHeroeByIdAsync = (id) => {

//     return new Promise((resolve, reject)=>{

//         setTimeout(() => {
            
//             const heroe = getHeroeByID(id);

//             if (heroe == undefined){
//                 console.log("Heroe no existe");
//             }else{
//                 return resolve(heroe);
//             }
             
//         }, 2000);
    
//     });
// }

// getHeroeByIdAsync(1)
// .then(heroe => console.log('heroe',heroe));
// .catch(err => console.warn(err));

//Como el profesor resolvio la tarea


const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject)=>{

        setTimeout(() => {
            
            const heroe = getHeroeByID(id);

            if (heroe == undefined){
                reject('No se encontro Heroe');
            }else{
                resolve(heroe);
            }
        }, 2000);
    
    });
}

getHeroeByIdAsync(2)
.then(console.log)
.catch(console.warn);


