import { Pipe, PipeTransform} from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroCompletado',
  pure: false // cada que se detecta un cambio se llama al filtro
})

export class FiltroCompletadoPipe implements PipeTransform{
  transform(listas: Lista[], completada: boolean = true): Lista[] {
    return listas.filter(lista => lista.terminada === completada);
  }
}
