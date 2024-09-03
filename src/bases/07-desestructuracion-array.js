// desestructuracion de arreglos

const personajes = ['Spiderman', 'Superman', 'Flash'];

/*
console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);
*/

const [Spiderman] = personajes;
const [,,Flash] = personajes;
const [,Superman,] = personajes;
const [p3] = personajes; // traer a flash

console.log(Spiderman);
console.log(Flash);
console.log(Superman);
console.log(p3); // muestra a spiderman

const retornoArreglo = () => {
    return ['ABC', 123];
};

const [letras, numero] = retornoArreglo();
console.log(letras, numero);

// Tarea
// 1. El primer valor del arr se llamara nombre
// 2. Se llamara setNombre
const useState = (valor) => {
    return [valor, () => { console.log('Hola Mundo')}];
}

const [nombre, setNombre] = useState('Spiderman');
console.log(nombre);
setNombre();