import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { DatosAdminService } from '../../../../services/datos-admin.service';

@Component({
  selector: 'app-ver-sucursal',
  templateUrl: './ver-sucursal.component.html',
  styleUrls: ['./ver-sucursal.component.scss'],
})

export class VerSucursalComponent implements OnInit {
sucursal;
 id:any;
 grupo:string="";
 no_sucursal:string="";
 nombre_comercial:string="";
 direccion:string="";
 ciudad:string="";
 estado:string="";
 telefono:string="";
 email:string="";
 estatus:string="";

  constructor(navParams: NavParams,public datosService: DatosAdminService, public http: Http,
    public modalCtrl : ModalController) { 
    this.id=navParams.get('value');

  }

  ngOnInit() {
      this.mostrar_Sucursal();
  }

  closeModal(){ this.modalCtrl.dismiss(); }

  mostrar_Sucursal(){
    this.http.get(this.datosService.servidor+'/api/Sucursal/'+this.id)
    .subscribe(
    (datos) => { // Success
      let sucursal = datos.json();
      sucursal = Object.values(sucursal);

      //this.sucursal = Object.values(datos[0]);
this.nombre_comercial=sucursal[3];
      console.log(sucursal);
      alert(this.nombre_comercial);
    },
    (error) => {
      console.error(error);
    }
    )
}

  Actualizar_Sucursal(){

  }


}
