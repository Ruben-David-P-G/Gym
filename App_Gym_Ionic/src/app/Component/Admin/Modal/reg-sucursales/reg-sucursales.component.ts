import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController } from '@ionic/angular';
import { Http } from '@angular/http';
//import { SucursalesComponent } from '../../sucursales/sucursales.component';


@Component({
  selector: 'app-reg-sucursales',
  templateUrl: './reg-sucursales.component.html',
  styleUrls: ['./reg-sucursales.component.scss'],
})

export class RegSucursalesComponent implements OnInit {

  grupo:string="";
  no_sucursal:string="";
  nombre_comercial:string="";
  direccion:string="";
  ciudad:string="";
  estado:string="";
  telefono:string="";
  email:string="";
  estatus:string="ACTIVO";
  
  constructor(public http: Http,
    public modalCtrl : ModalController) { }
  
  closeModal(){ this.modalCtrl.dismiss(); }

  ngOnInit() {}

  Registrar_Solicitud(){
    if(this.nombre_comercial.length ==0){ 
      alert("Campo solicitud vacío");
    }else if(this.grupo.length ==0){ 
      alert("Campo solicitud vacío");
    }else if(this.no_sucursal.length ==0){ 
      alert("Campo solicitud vacío");
    }else if(this.direccion.length ==0){ 
      alert("Campo solicitud vacío");
    }else{

      let params = new FormData();
      params.append('grupo', this.grupo);
      params.append('no_sucursal', this.no_sucursal);
      params.append('nombre_comercial', this.nombre_comercial);
      params.append('direccion', this.direccion);
      params.append('ciudad', this.ciudad);
      params.append('estado', this.estado);
      params.append('telefono', this.telefono);
      params.append('email', this.email);
      params.append('estatus', this.estatus);
  
      this.http.post('http://127.0.0.1:8000/api/Sucursal', params)
        .subscribe((datos) => {
          let jsonResponse = datos.json();
          jsonResponse = Object.values(jsonResponse[0]);
          //this.viewCtrl.dismiss();
        });
        //this.sucursalescomponent.listarSucursales();
        this.modalCtrl.dismiss(); 
    }
  }

}
