// arrglos en JS

//const arreglo = new Array();
const arreglo = [1,2,3,4,5,6,7,8,9];
//arreglo.push(1); PUSH cambio el arreglo principal

let arreglo2 = [...arreglo, 5];
//arreglo2.push(5);

const arreglo3 = arreglo2.map( function(numero) {
    return numero * 2;
});


console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);