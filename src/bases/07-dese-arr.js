
// Desetructuracion de arreglos


const personajes= ['Goku','Vegeta','trunks'];

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);


const[,,p1] = personajes;
console.log(p1);




const retornaArreglo = () =>{
    return ['ABC',123];
}

const [letras, numeros]= retornaArreglo();

console.log(letras, numeros);



// Tarea
//1. Primer valor del arreglo se debe llamar nombre
//2. setNombre

const estado = (valor) => {
    return[valor, ()=>{console.log('hola mundo');}]
} 


// const arr = estado('Goku');
// console.log(arr);

const [nombre,setNombre] = estado('Goku');
console.log(nombre,);
setNombre();

// personajes.forEach(element => {
//     console.log(element);
// });