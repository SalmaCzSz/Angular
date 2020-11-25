(function(){
    var mensaje = 'Hola';

    if(true){
        //mensaje = 'Mundo'; //imprime mundo, se redefine el espacio en memoria
        var mensaje = 'Mundo'; //no se imprime
    }

    console.log(mensaje);
}) ();

(function(){
    let mensaje = 'Hola';

    if(true){
        let mensaje = 'Mundo'; //no se redefine la variable, no hay problema porque el if funciona como un bloque aparte
    }

    console.log(mensaje);
}) ();

(function(){
    const mensaje = 'Hola';

    if(true){
        //mensaje = 'Mundo'; //no se puede redefinir, la variable const utiliza menos espacio 
    }
    console.log(mensaje);
}) ();