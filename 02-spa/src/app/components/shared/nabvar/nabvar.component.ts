import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html'
})

export class NabvarComponent implements OnInit{
  constructor( private router:Router ){}

  ngOnInit(){}

  buscarHeroe( termino:string ){
    // console.log(termino);
    this.router.navigate( ['/buscar', termino] );
  }
}
