( () => {
    const retirarDinero = (montoRetirar: number) : Promise<number> => {
        /* Promise<algo> es para definir el tipo de dato que la promesa retorna si no hay errores*/
        let dineroActual = 1000;
        return new Promise((resolve, reject) => {
            if(montoRetirar > dineroActual){
                reject('No hay suficientes fondos');
            } else {
                dineroActual -= montoRetirar;
                resolve(dineroActual);
            }
        })
    }

    // retirarDinero(500); /* No hace nada */
    retirarDinero(1500).then(montoActual => console.log(`Me queda ${montoActual}`))
                      // .catch(err => console.warn(err));
                      .catch(console.warn);
}
)();