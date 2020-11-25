(function(){ /* función auto invocada */
    function saludar( nombre:string ) { /*TS*/
        console.table( 'Hola ' + nombre ); // Hola Logan
    }

    const wolverine = {
        nombre: 'Logan'
    };

    saludar(wolverine.nombre);
}) ();

//function saludar( nombre:string ) { /*TS | function saludar( nombre ) { JS*/
  //  console.table( 'Hola ' + nombre ); // Hola Logan
//}

/*const wolverine = {
    nombre: 'Logan'
};*/ 

//saludar(wolverine.nombre); /* cualquier variable no definida tiene el valor undefined */
/*Consola: tsc <archivo>.ts>  // esta instrucción convierte el archivo a JS */ 
