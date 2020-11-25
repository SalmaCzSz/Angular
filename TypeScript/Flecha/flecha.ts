( function (){
    let miFuncion = function (a: string){ /* se puede definir como let o const */
        return a.toUpperCase();
    }

    const miFuncionF = (a: string) => a.toUpperCase(); /* retorna a 'a'*/

    console.log( miFuncion ('Normal') );
    console.log ( miFuncionF('Flecha') );


    const sumarN = function(a: number, b: number){
        return a + b;
    }

    const sumarF = (a: number, b: number) => a + b;

    console.log( sumarN(1, 2) );
    console.log( sumarF( 3, 4) );

    const hulk = {
        nombre: 'Hulk',
        smash(){
            //setTimeout(function(){/* undefined smash */
            setTimeout(() => { /* Hulk smash!!, la función de flecha no modifica "this" */
                console.log(`${this.nombre} smash!!`); 
            }, 1000);
            
        }
    }

    hulk.smash();
}
)();