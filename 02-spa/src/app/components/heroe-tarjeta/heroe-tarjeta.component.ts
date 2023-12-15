import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})

export class HeroeTarjetaComponent implements OnInit{
  @Input() heroe: any = {}; // recibe el heroe desde afuera
  @Input() idx: number = 0;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router){
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(){
  }

  verHeroe(){
    this.router.navigate( ['/heroe', this.idx] );
    //this.heroeSeleccionado.emit(this.idx);
  }
}
