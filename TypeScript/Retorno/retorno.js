"use strict";
(() => {
    const sumar = (a, b) => {
        return a + b;
    };
    const suma = (a, b) => a + b;
    const nombre = () => 'Hola Salma';
    /* TS no puede inferir el tipo de dato a menos que se especifique 'promise<tipo>'*/
    const obtenerSalario = () => {
        return new Promise((resolve, rejet) => {
            resolve('Salma');
        });
    };
    obtenerSalario().then(a => console.log(a.toUpperCase()));
})();
