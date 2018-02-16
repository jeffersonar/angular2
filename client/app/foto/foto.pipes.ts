import { Pipe, PipeTransform} from '@angular/core';
import { FotoComponent } from './foto.component';

@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements  PipeTransform {

    // o correto é transform, eu errei aqui intencionalmente para mostrar algo a seguir!

    transform(fotos:FotoComponent[], digitado:string) {
        digitado = digitado.toLowerCase();
        return fotos.filter( foto => foto.titulo.toLowerCase().includes(digitado));
    }
}