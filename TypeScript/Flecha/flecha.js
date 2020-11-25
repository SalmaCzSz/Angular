"use strict";
(function () {
    let miFuncion = function (a) {
        return a.toUpperCase();
    };
    const miFuncionF = (a) => a.toUpperCase(); /* retorna a 'a'*/
    console.log(miFuncion('Normal'));
    console.log(miFuncionF('Flecha'));
    const sumarN = function (a, b) {
        return a + b;
    };
    const sumarF = (a, b) => a + b;
    console.log(sumarN(1, 2));
    console.log(sumarF(3, 4));
    const hulk = {
        nombre: 'Hulk',
        smash() {
            //setTimeout(function(){/* undefined smash */
            setTimeout(() => {
                console.log(`${this.nombre} smash!!`);
            }, 1000);
        }
    };
    hulk.smash();
})();
