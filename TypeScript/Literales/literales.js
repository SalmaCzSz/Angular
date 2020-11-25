"use strict";
(function () {
    function getEdad() {
        return 100 + 100 + 300;
    }
    const nombre = 'Salma';
    const apellido = 'Cruz';
    const edad = 21;
    //Salma Cruz (Edad: 21)
    const salida = nombre + " " + apellido + " " + "(Edad: " + edad + ")"; //estandar tradicional
    console.log(salida);
    //const literal = `${nombre} ${apellido} (${edad})`; /* se pueden hacer operaciones dentro de las llaves*/
    const literal = `${nombre} ${apellido} (${getEdad()})`;
    /* las template literales permiten construir strings de forma más sencilla */
    console.log(literal);
})();
