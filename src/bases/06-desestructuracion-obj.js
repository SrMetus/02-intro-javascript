// desestructuracion

const persona = {
    nombre: 'Sebastian',
    edad: 35,
    clave: 'Ironman'
};

const {nombre, edad, clave} = persona; // no importa el orden

/*
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);
*/

console.log(nombre);
console.log(edad);
console.log(clave);

const retornaPersona = ({nombre, edad, clave, rango = 'Capitan'}) => {

    //console.log(nombre, edad, clave, rango);

};

retornaPersona(persona);

const avenger = ({edad, clave}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 12.34,
            lng: 56.78
        }
    };
};

const {nombreClave, anios, latlng:{lat, lng}} = avenger(persona);
console.log(nombreClave, anios)
console.log(lat, lng);

