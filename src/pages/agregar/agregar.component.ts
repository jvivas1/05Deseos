import { Component, OnInit } from '@angular/core';

import {Lista,ListaItem} from '../../app/clases/index'
import { AlertController,NavController } from 'ionic-angular';
import {ListadeseosService} from '../../app/services/listadeseos.service';
@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {

  nombreLista:string="";
  nombreItem:string ="";

  items:ListaItem[]=[];

  constructor(
    public alertCtrl: AlertController,
    public navCtrl:NavController,
    public _lista:ListadeseosService
      ) {  }

  ngOnInit() {}

  agregar(){
    if(this.nombreItem.length==0)
    {
        return;
    }

    let item=new ListaItem();
    item.nombre=this.nombreItem;

    this.items.push(item);
    this.nombreItem="";

  }

  eliminar(id)
  {
     this.items.splice(id,1);
  }

  GuardarLista()
  {
    if(this.nombreLista.length==0)
    {
        this.showAlert();
        return;
    }

    let lista=new Lista(this.nombreLista);
    lista.items=this.items;

    this._lista.agregarLista(lista);

    this.navCtrl.pop();
  }

  showAlert() {
  let alert = this.alertCtrl.create({
    title: 'Nombre de la lista!',
    subTitle: 'El nombre de la lista es necesario!',
    buttons: ['OK']
  });
  alert.present();
}
}
