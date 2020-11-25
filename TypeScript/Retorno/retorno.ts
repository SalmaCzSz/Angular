( () => {
    const sumar = (a: number, b: number): number => { /*la función regresa un número */
        return a + b;
    }
    const suma = (a: number, b: number): number =>  a + b;
    const nombre = () => 'Hola Salma';

    /* TS no puede inferir el tipo de dato a menos que se especifique 'promise<tipo>'*/
    const obtenerSalario = (): Promise<string> => {
        return new Promise( (resolve, rejet) => {
            resolve('Salma');
        });
    }

    obtenerSalario().then(a => console.log(a.toUpperCase()))
}
)();