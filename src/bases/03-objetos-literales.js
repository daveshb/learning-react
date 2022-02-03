

const persona ={
nombre: 'David',
apellido: 'Henao',
edad: 30,
direccion:{
 ciudad: 'new york',
 zip: 501030,
 lat: 14.55 ,
 lng: 15.22 ,
}
};


//console.log(persona.nombre);
const persona2 = persona;
persona2.nombre= 'peter';

const persona3 ={...persona}; // Asi se crea un objeto nuevo de copia de otro

persona3.nombre= 'Esteban';

console.log(persona2);
console.table({persona});
console.log(persona3);



// is se quiere otro objeto, se debe crear desde cero, no igualarlo a otra variable