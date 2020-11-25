(function(){
    let mensaje = 'Hola';
    //mensaje = 123; //TS pone un candado y verifica el tipo de dato que se usa en las variables

    let numero = 123;
    //numero = '456'; no se puede asignar un string a un number

    let mensajes : string = 'hola'; //sintaxis para definir un tipo de dato
    let numeros : number = 123; //es conveniente cuando no se inicializan las variables
    let booleano : boolean = false;
    let hoy : Date = new Date(); //Date es una función constructora

    let cualquiercosa; //acepta cualquier tipo
    cualquiercosa = mensajes;
    cualquiercosa = numeros;
    cualquiercosa = booleano;
    cualquiercosa = hoy;

    let spiderman = {
        nombre: 'Peter',
        edad: 30
    }

    spiderman = { //solo acepta los paramentros definidos en el metodo
        nombre: 'Norman',
        edad: 21
    };
})();