( function (){
    /* primero van los argumentos obligatorios, opcionales y al final los que son por defecto */
    function activar (quien: string,
                      momento?: string,
                      objeto: string = 'Batiseñal',
                      ){ /* el ? indica que es un valor opcional */
        

        if(momento){
            console.log(`${quien} activó la ${objeto} en la ${momento}.`);
        } else {
            console.log(`${quien} activó la ${objeto}.`);
        }
    }

    activar('Salma', 'tarde');
}
)();