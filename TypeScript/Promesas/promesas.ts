(() => { 
    /* las promesas sirven para ejecutar código sin bloquear el código de la app */
    console.log('Inicio');
    
    /* TS no puede traducir directamente las promesas (pasar a es6*/
    const prom1 = new Promise((resolve, reject) => {
        /*resolve: lo que retornamos si todo funciona bien
          reject: lo que se retorna si hay errores */
          setTimeout(() => {
              //resolve('Se terminó el timeout.');
              reject('Se terminó el timeout'); /*Uncaught: no se atrapó el error */
          }, 1000);
    }); 

    prom1.then(mensaje => console.log(mensaje)) /* el código no es bloqueante  */
         .catch(err => console.warn(err)); /* así se manejan los errores */
    
    console.log('Fin');
})();