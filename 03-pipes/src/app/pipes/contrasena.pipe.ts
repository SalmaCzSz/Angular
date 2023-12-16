import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, status: boolean): string{
    let contrasenia = value;
    let long = value.length;

    if(status){
      for(let i = 0; i<= long; i++){
        contrasenia = contrasenia.replaceAll(contrasenia[i], '*')
      }
    } 

    return contrasenia;
  }
}
