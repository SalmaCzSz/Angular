import { Component } from '@angular/core' // importa el decorador component

@Component({
    selector: 'app-body',
    //template: `<h1>Body Component</h1>`
    templateUrl: './body.component.html'
})

export class BodyComponent{
    frase: any = {
        mensaje: 'Un gran poder requiere una gran responsabilidad.',
        autor: 'Ben Parker'
    }

    mostrar = true;

    personajes: string[] = ['Spiderman', 'Venom', 'Dr. Octopus']
}