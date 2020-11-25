"use strict";
(function () {
    let mensaje = 'Hola';
    //mensaje = 123; //TS pone un candado y verifica el tipo de dato que se usa en las variables
    let numero = 123;
    //numero = '456'; no se puede asignar un string a un number
    let mensajes = 'hola'; //sintaxis para definir un tipo de dato
    let numeros = 123; //es conveniente cuando no se inicializan las variables
    let booleano = false;
    let hoy = new Date(); //Date es una función constructora
    let cualquiercosa; //acepta cualquier tipo
    cualquiercosa = mensajes;
    cualquiercosa = numeros;
    cualquiercosa = booleano;
    cualquiercosa = hoy;
    let spiderman = {
        nombre: 'Peter',
        edad: 30
    };
    spiderman = {
        nombre: 'Norman',
        edad: 21
    };
})();
