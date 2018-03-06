import { Injectable } from '@angular/core';
import {Lista} from '../clases/listas';
@Injectable()
export class ListadeseosService {

  listas:Lista[]=[];

  constructor() {
      let lista1=new Lista('Compras de supermercado');
      let lista2=new Lista('Videojuegos');
      let lista3=new Lista('Cosas de univerisad');

      this.listas.push(lista1);
      this.listas.push(lista2);
      this.listas.push(lista3);

      console.log("Servicio inicializado!!");
   }
}
