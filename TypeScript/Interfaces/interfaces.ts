( () => {
    /* Interface: reglas que debe cumplir el objeto. No existe en JS */
    interface Xmen{
        nombre: string;
        edad: number;
        poder?: string;
    }

    const enviarMision = ( xmen: { nombre: string} ) => { /* recibe un objeto que tiene por lo menos nombre */
        console.log(`Enviando a ${ xmen.nombre } a la misión`);
    }

    const regresarAlCuartel = ( xmen: Xmen ) => { 
        console.log(`Enviando a ${ xmen.nombre } a la misión`);
    }

    const wolverine1 = {
        nombre: 'Logan', 
        edad: 60
    }

    const wolverine2 : Xmen = { /* objeto que cumple las reglas del interface */
        nombre: 'Logan', 
        edad: 60
    }

    enviarMision(wolverine1);
    regresarAlCuartel(wolverine2);
}
)();