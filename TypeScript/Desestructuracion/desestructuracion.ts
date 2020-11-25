( () => { /* para extraer cosas de objetos y arreglos */
    const avenger = {
        nombre: 'Steve',
        clave: 'Capitan América',
        poder: 'Droga'
    }

    console.log( avenger.nombre );
    console.log( avenger.clave );
    console.log( avenger.poder );


    const {nombre, clave, poder} = avenger
    console.log( nombre );
    console.log( clave );
    console.log( poder );


    const extraer = (avenger: any) => {
        const {nombre, clave} = avenger
        console.log( nombre );
        console.log( clave );
    }

    extraer (avenger);


    const extrae = ({nombre, poder} : any) => { /* la desestructuración funciona como argumento */
        console.log( nombre );
        console.log( clave );
    }
    extrae (avenger);


    const avengers: string[] = ['Thor', 'Iroman', 'Spiderman'];
    console.log( avengers[0] );
    console.log( avengers[1] );
    console.log( avengers[2] );


    const [thor, hombre, arania] = avengers; /* '[]' porque es un arreglo */
    console.log( thor );
    console.log( hombre );
    console.log( arania );

    const [ , , arana] = avengers;
    const extraerArr = ([thor, ironman, spiderman]: string[]) => {
        console.log( thor );
        console.log( ironman );
        console.log( spiderman );
    }

    extraerArr(avengers);
}
)();