( () => {
    class Avenger{
        nombre: string;
        equipo: string;
        nombreReal?: string;
        puedePelear?: boolean;
        peleasGanadas?: number;

        /* se ejecuta al instanciar las clases */
        constructor(nombre: string,
                    equipo:string,
                    nombreReal?: string,
                    puedePelear?: boolean,
                    peleasGanadas?: number){ 
            this.nombre = nombre;
            this.equipo = equipo
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
    }

    /* forma corta de crear clases con valores iniciles */
    class Avengers{ 
       constructor( public nombre:string,
                    public equipo: string,
                    public nombreReal?: string,
                    public puedePelear?: boolean,
                    public peleasGanadas: number = 0){}
    }

    const antman = new Avengers('Antman', 'Capi');
    console.log(antman);
})();