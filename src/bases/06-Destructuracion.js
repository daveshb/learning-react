//Desestructuracion 
// Asignacion desestructurante 

//Lectura
//   https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment


// const persona = {
//     nombre: 'David',
//     edad: 30,
//     clave: 'Iroman'
// };

// const {nombre,edad,clave} =  persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

// console.log(persona.edad);
// console.log(persona.clave);

// _______________________________________________________
// const retornaPerosa = (usuario) => {

//     const {nombre,edad,clave} =  usuario;
//     console.log(edad,clave,nombre);
// }
// retornaPerosa(persona);
// ___________________________________________________________

// const retornaPerosa = ({nombre,edad,rango='Capitan'}) => {

//     console.log(nombre,edad,rango);
// }
// retornaPerosa(persona);
// ______________________________________________________________

const persona = {
    nombre: 'David',
    edad: 30,
    clave: 'Iroman'
};

const user = ({clave,nombre,edad,}) => {
    // console.log(nombre,edad,rango);
    return{
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.15,
            log: 15.36,
        }
    }
}
const {nombreClave,anios,latlng:{lat, log}} = user(persona);
console.log(nombreClave, anios);
console.log(lat);
console.log(log);




// const persona = {
//     nombre: 'David',
//     edad: 30,
//     clave: 'Iroman'
// };

// const use = ({clave,nombre,edad,rango='Capitan'}) => {
//     // console.log(nombre,edad,rango);
//     return{
//         nombreClave: clave,
//         anios: edad,
//     }
// }

// const avenger = use( persona );

// console.log(nombreClave, anios);
