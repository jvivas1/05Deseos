import { Component, OnInit } from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';
import {Lista,ListaItem} from '../../app/clases/index';
import {ListadeseosService} from '../../app/services/listadeseos.service';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {
  idx:number;
  lista:any;

  constructor(
    public alertCtrl: AlertController,public navC:NavController,public navP:NavParams,public listadeseos:ListadeseosService)
   {
      this.idx=this.navP.get("idx");
      this.lista=this.navP.get("lista");

   }

  ngOnInit() {}

  actualizar(item:ListaItem)
  {
    item.completado=!item.completado;

    let todosMarcados=true;
    for(let item of this.lista.items)
    {
      if(!item.completado){
        todosMarcados=false;
        break;
      }
    }
    this.lista.terminado=todosMarcados;

    this.listadeseos.actualizarData();
  }

  borrarItem()
  {
    let confirm = this.alertCtrl.create({
      title: this.lista.nombre,
      message: 'Está seguro que desea eliminar la lista?',
      buttons: ['Cancelar',
        {
          text: 'Eliminar',
          handler: () => {
            this.listadeseos.eliminarLista(this.idx);
            this.navC.pop();
          }
        }
      ]
    });
    confirm.present();
  }
}
