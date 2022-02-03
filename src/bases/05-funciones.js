//Funciones en JS



// function saludar(nombre){
// return `hola, ${nombre}`;
// }
// console.log(saludar('David'));


//Mejor crear las funciones a partir de una variable.

const saludar =function (nombre){
    return `hola, ${nombre}`;
    }

    console.log(saludar('David'));


//Arrow function 
const despedirse = nombre => `chao, ${nombre}`;
console.log(despedirse('David'));

//Hola mundo Arrow function

const hiMundo = () => `hola mundo`;
console.log(hiMundo());



//En esta funcion se reemplaza el retur por (), despues del arrow hasta el final
const getUser = () => ({
        uid: 'ABC123',
        username:'Horse',
});

console.log(getUser());


//Tarea
//1 Transformar a una funcion de arrow
// retornar un objeto implicito
// Pruebas

// function getUsuarioActivo(nombre){
//     return {
//         uid: 'ABC567',
//         username: nombre,
//     }
// }

// const usuarioActivo = getUsuarioActivo('David Henao');
// console.log(usuarioActivo);


const getUsuarioActivo = (nombre) => ({uid:'ABC567',username: nombre,});

const usuarioActivo = getUsuarioActivo('David Henao');
console.log(usuarioActivo);


