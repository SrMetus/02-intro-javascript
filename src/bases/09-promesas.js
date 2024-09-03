import { getHeroeById } from "./bases/08-export-import";

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         console.log(heroe);
//         resolve(heroe)
//     }, 2000)
// });

// promesa.then((heroe) => {
//     console.log('Then de la promesa')
// })
// .catch(error => console.warn(error));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            //console.log(heroe);
            heroe ? resolve(heroe) : reject('No se pudo encontrar el heroe');
            // resolve(heroe);
            // reject('No se pudo encontrar el heroe');
        }, 2000)
    });
}

getHeroeByIdAsync(4)
    .then(heroe => console.log('Heroe', heroe))
    // .then(console.log)
    .catch(error => console.warn('Error:', error));
    // .catch(console.warn)