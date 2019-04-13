import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController } from '@ionic/angular';
import { Http } from '@angular/http';
import { SucursalesComponent } from '../../sucursales/sucursales.component';
import { DatosAdminService } from '../../../../services/datos-admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reg-sucursales',
  templateUrl: './reg-sucursales.component.html',
  styleUrls: ['./reg-sucursales.component.scss'],
})

export class RegSucursalesComponent implements OnInit {
  resultado:string="";
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
    public modalCtrl : ModalController,public datosService: DatosAdminService) { }
  
  closeModal(){ this.modalCtrl.dismiss(); }

  ngOnInit() {}

  Registrar_Sucursal(){
    if(this.nombre_comercial.length ==0){ 
      Swal.fire({ type: 'warning', title: 'Campo solicitud vacío', showConfirmButton: false, timer: 1500 });
    }else if(this.grupo.length ==0){ 
      Swal.fire({ type: 'warning', title: 'Campo Grupo vacío', showConfirmButton: false, timer: 1500 });
    }else if(this.no_sucursal.length ==0){ 
      Swal.fire({ type: 'warning', title: 'Campo # Sucursal vacío', showConfirmButton: false, timer: 1500 });
    }else if(this.direccion.length ==0){ 
      Swal.fire({ type: 'warning', title: 'Campo Dirección vacío', showConfirmButton: false, timer: 1500 });
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
  
      this.http.post(this.datosService.servidor+'/api/Sucursal', params)
        .subscribe((datos) => {
          //this.resultado="SI";
        }, err => {
            /*console.log(err);*/ 
            this.resultado="NO";
          });
        this.modalCtrl.dismiss();
        /*
        if(this.resultado=="SI"){
          Swal.fire({ type: 'success', title: 'Se guardo con excicto', showConfirmButton: false, timer: 1500 });
        }else if(this.resultado=="NO"){
          Swal.fire({ type: 'error', title: 'Error al guardar', showConfirmButton: false, timer: 1500 });
        }else{
          alert(this.resultado);
        }*/
        
    }
  }

}
