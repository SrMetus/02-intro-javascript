//funciones

/*
function saludar(nombre) {
    return `hola, ${nombre}`;
}
console.log(saludar('Sebastian'));
*/

const saludar = function saludar(nombre) {
    return `hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `hola, ${nombre}`;
}

const saludar3 = (nombre) => `hola, ${nombre}`;

const saludar4 = () => `hola mundo`

console.log(saludar('Sebastian'));
console.log(saludar2('Andre'));
console.log(saludar3('Martin'));
console.log(saludar4());

const getUser = () => ({  //({}) Esto es un Return Implicito 
    uid: 'ABC1234',
    username: 'metus',
});
console.log(getUser());

// Tarea
// 1. Transformar a una funcion Flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas

/*function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC1574',
        username: nombre,
    }
};*/

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC1574',
    username: nombre,  // Esta linea es la que cambia de Funcion a Funcion Flecha. No es necesario usar return y {}
 });

const usuarioActivo = getUsuarioActivo('Sebastian');
console.log(usuarioActivo);