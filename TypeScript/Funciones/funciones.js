"use strict";
(function () {
    /* primero van los argumentos obligatorios, opcionales y al final los que son por defecto */
    function activar(quien, momento, objeto = 'Batiseñal') {
        if (momento) {
            console.log(`${quien} activó la ${objeto} en la ${momento}.`);
        }
        else {
            console.log(`${quien} activó la ${objeto}.`);
        }
    }
    activar('Salma', 'tarde');
})();
