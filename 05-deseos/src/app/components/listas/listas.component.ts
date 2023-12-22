import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit{
  @Input() terminada = true;
  @ViewChild(IonList) lista: IonList; // Busca el elemento IonList en el HTML

  constructor(public deseosService: DeseosService, // va publico para poder ser utiliado por elementos html
              private router: Router,
              private alertCtrl: AlertController) { }

  ngOnInit() { }
  
  listaSeleccionada(lista: Lista){
    console.log(lista);
    if(this.terminada){
      this.router.navigateByUrl(`/tabs/tab2/agregar/${ lista.id }`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${ lista.id }`);
    }
  }

  borrarLista(lista: Lista){
    this.deseosService.borrarLista(lista);
  }

  async editarLista(item: Lista){
    const alert = await this.alertCtrl.create({
      header: 'Editar',
      inputs: [
        {
         name: 'titulo',
         type: 'text',
         placeholder: 'Nombre de la lista',
         value: item.titulo
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () =>{
            console.log('Cancelar');
            this.lista.closeSlidingItems();
          }
        },
        {
          text: 'Modificar',
          handler: (data) =>{
            console.log(data);
            if(data.titulo.length === 0){
              return;
            } 

            item.titulo = data.titulo
            this.deseosService.guardarStorage();
            this.lista.closeSlidingItems();
          }
        }
      ]
    });

    alert.present();
  }
}
