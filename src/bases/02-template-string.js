

const nombre ='David';
const apellido = 'Henao'

const nombrecompleto = nombre + ' ' + apellido;

console.log(nombrecompleto);


const nombrecompleto2 =`mi nombre es: ${nombre} y
 mi apellido es: ${apellido}
 ${ 1 + 1 }` ; 
console.log(nombrecompleto2);


function getSaludo(nombre){
    return 'Hola Mundo' + nombre;
}

console.log(`Este es un texto: ${ getSaludo(nombre)}`);