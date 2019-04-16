import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Http } from '@angular/http';
import { DatosAdminService } from '../../../../services/datos-admin.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-reg-caegorias',
  templateUrl: './reg-caegorias.component.html',
  styleUrls: ['./reg-caegorias.component.scss'],
})

export class RegCaegoriasComponent implements OnInit {
  descripcion:string="";
  nombre:string="";
  id_grupo_sucursal:string="1";
  constructor(public http: Http,
    public modalCtrl : ModalController,public datosService: DatosAdminService) { }

  ngOnInit() {}

  closeModal(){ this.modalCtrl.dismiss(); }

  Registrar_Categoria(){
    if(this.nombre.length ==0){ 
      Swal.fire({ type: 'warning', title: 'Campo nombre vacío', showConfirmButton: false, timer: 1500 });
    }else if(this.descripcion.length ==0){
      Swal.fire({ type: 'warning', title: 'Campo descripción vacío', showConfirmButton: false, timer: 1500 });
    }else{
      
      let params = new FormData();
      params.append('nombre', this.nombre);
      params.append('descripcion', this.descripcion);
      params.append('id_grupo_sucursal', this.id_grupo_sucursal);
     
      this.http.post(this.datosService.servidor+'/api/Categoria', params)
        .subscribe((datos) => {
          console.log(datos);
        }, err => {
          console.log(err);
          });
        this.modalCtrl.dismiss();

        
    }
  }


}
