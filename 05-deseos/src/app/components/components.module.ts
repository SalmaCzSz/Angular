import { NgModule } from '@angular/core'; // siempre se incluye
import { CommonModule } from '@angular/common'; // incluye el ngIf y ngFor, si no se usan se puede mitir
import { ListasComponent } from './listas/listas.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [
    ListasComponent
  ],
  exports:[
    ListasComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
