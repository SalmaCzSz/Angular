import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitán América';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  personajes: string[] = ['Ironman', 'Spiderman', 'Thor', 'Loki', 'Groot'];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }

  valorPromesa = new Promise<string> ((resolve) => {
    setTimeout(() => {
      resolve('llegó la data');
    }, 4500);
  });

  fecha: Date = new Date();
  idioma: string = 'es';
  videoUrl: string = 'https://www.youtube.com/embed/g7U96o3f9FI?si=y0NGRpUxsFlFLoXD';

  /* PIPE PERSONALIZADO */
  nombre2: string = 'SaLmA cRuZ sÁnChEz';
  activar: boolean = true;
}
