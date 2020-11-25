"use strict";
(() => {
    /* Uso de Let y Const
    var nombre = 'Ricardo Tapia';
    var edad = 23;

    var PERSONAJE = {
      nombre: nombre,
      edad: edad
    };*/
    let nombre = 'Ricardo Tapia';
    let edad = 23;
    const Personaje = {
        nombre: nombre,
        edad: edad
    };
    console.log(Personaje);
    var batman = {
        nombre: 'Bruno Díaz',
        artesMarciales: ['Karate', 'Aikido', 'Wing Chun', 'Jiu-Jitsu']
    };
    console.log(batman);
    /* Convertir esta funcion a una funcion de flecha
    function resultadoDoble( a, b ){
        return (a + b) * 2
    }*/
    const resultadoDoble = (a, b) => (a + b) * 2;
    console.log(resultadoDoble(1, 2));
    /*  Función con parametros obligatorios, opcionales y por defecto:
        NOMBRE = obligatorio
        PODER  = opcional
        ARMA   = por defecto = 'arco' */
    function Avenger(nombre, poder, arma = 'arco') {
        if (poder) {
            console.log(`${nombre} tiene el poder de ${poder} y un arma ${arma}`);
        }
        else {
            console.log(`${nombre} tiene un arma ${arma}`);
        }
    }
    Avenger('Salma');
    /* Cree una clase que permita manejar la siguiente estructura
    La clase se debe de llamar rectangulo, debe de tener dos propiedades: base y altura
    También un método que calcule el área  =  base * altura, ese método debe de retornar un numero. */
    class rectangulo {
        constructor(base, altura) {
            this.base = base;
            this.altura = altura;
            this.area = (base, altura) => base * altura;
        }
    }
    const figura = new rectangulo();
    console.log(figura.area(2, 2));
})();
