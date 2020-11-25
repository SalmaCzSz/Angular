"use strict";
(() => {
    class Avenger {
        /* se ejecuta al instanciar las clases */
        constructor(nombre, equipo, nombreReal, puedePelear, peleasGanadas) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
    }
    /* forma corta de crear clases con valores iniciles */
    class Avengers {
        constructor(nombre, equipo, nombreReal, puedePelear, peleasGanadas = 0) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
    }
    const antman = new Avengers('Antman', 'Capi');
    console.log(antman);
})();
