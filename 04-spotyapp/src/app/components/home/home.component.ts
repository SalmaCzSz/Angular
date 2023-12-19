import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit{
  /*paises: any[] = [];

  constructor( private http: HttpClient){
    this.http.get('https://restcountries.com/v3.1/lang/spanish')
             .subscribe( (resp: any) => {
              this.paises = resp;
              console.log(resp);
             } );
  }
  */
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string = "";
 
  constructor(private spotify: SpotifyService){
    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
                .subscribe( (data: any) => {
                  console.log(data);
                  this.nuevasCanciones = data;
                  this.loading = false;
                }, (errorServicio) => {
                  console.log(errorServicio.error.error.message);
                  this.mensajeError = errorServicio.error.error.message;
                  this.error = true;
                  this.loading = false;
                });
  }

  ngOnInit(){

  }
}
