import { Component, OnInit } from '@angular/core';
import {ListadeseosService} from '../../app/services/listadeseos.service';
import {NavController} from 'ionic-angular';
import {AgregarComponent} from '../agregar/agregar.component';
import {DetalleComponent} from '../detalle/detalle.component';
@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html',
})
export class PendientesComponent implements OnInit {
  constructor(private _listadeseos:ListadeseosService,private navCtrl:NavController) {
   }

  ngOnInit() {}

  irAgregar()
  {
    this.navCtrl.push(AgregarComponent);
  }

  verDetalle(lista,index)
  {
    this.navCtrl.push(DetalleComponent,{lista,index});
  }
}
