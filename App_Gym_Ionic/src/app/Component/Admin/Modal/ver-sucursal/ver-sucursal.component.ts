import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { DatosAdminService } from '../../../../services/datos-admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-sucursal',
  templateUrl: './ver-sucursal.component.html',
  styleUrls: ['./ver-sucursal.component.scss'],
})

export class VerSucursalComponent implements OnInit {
sucursal;
ArryUsuario: any[] = [];
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
      this.grupo=sucursal[1];
      this.no_sucursal=sucursal[2];
      this.nombre_comercial=sucursal[3];
      this.direccion=sucursal[4];
      this.ciudad=sucursal[5];
      this.estado=sucursal[6];
      this.telefono=sucursal[7];
      this.email=sucursal[8];
      this.estatus=sucursal[9];
      console.log(sucursal);
    },
    (error) => {
      console.error(error);
    }
    )
}

  Actualizar_Sucursal(){

    if(this.nombre_comercial.length ==0){ 
      Swal.fire({ type: 'warning', title: 'Campo solicitud vacío', showConfirmButton: false, timer: 1500 });
    }else if(this.grupo.length ==0){ 
      Swal.fire({ type: 'warning', title: 'Campo Grupo vacío', showConfirmButton: false, timer: 1500 });
    }else if(this.no_sucursal.length ==0){ 
      Swal.fire({ type: 'warning', title: 'Campo # Sucursal vacío', showConfirmButton: false, timer: 1500 });
    }else if(this.direccion.length ==0){ 
      Swal.fire({ type: 'warning', title: 'Campo Domicilio vacío', showConfirmButton: false, timer: 1500 });
    }else{
      
      let params = new FormData();

      params.append('id', this.id);
      params.append('grupo', this.grupo);
      params.append('no_sucursal', this.no_sucursal);
      params.append('nombre_comercial', this.nombre_comercial);
      params.append('direccion', this.direccion);
      params.append('ciudad', this.ciudad);
      params.append('estado', this.estado);
      params.append('telefono', this.telefono);
      params.append('email', this.email);
      params.append('estatus', this.estatus);
  
      this.http.post(this.datosService.servidor+'/api/modificar/sucursal/'+this.id, params)
        .subscribe((datos) => {
          //this.resultado="SI";
          console.log(datos);
          Swal.fire({ type: 'success', title: 'Se actualizo con exícto', showConfirmButton: false, timer: 1500 });
        }, err => {
            console.log(err);
            Swal.fire({ type: 'error', title: 'Error', showConfirmButton: false, timer: 1500 });
          });

        this.modalCtrl.dismiss();
      
        
    }

  }


}
