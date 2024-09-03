const persona = {
    nombre: 'Sebastian',
    apellido: 'Gaggero',
    edad: 36,
    direccion: {
        ciudad: 'Concon',
        calle: 'Calle 123',
        numero: 1234,
    }

};

//console.table(persona);
console.log(persona);

/*const persona2 = persona;
persona2.nombre = 'Andre'; 
console.log(persona2)
//no se debe hacer estas mutaciones */

//se debe hacer un objeto nuevo
const persona2 = {...persona};
persona2.nombre = 'Andre';
console.log(persona);
console.log(persona2);