import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NavParams, ModalController } from '@ionic/angular';
import { DatosAdminService } from '../../../../services/datos-admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-caegoria',
  templateUrl: './ver-caegoria.component.html',
  styleUrls: ['./ver-caegoria.component.scss'],
})
export class VerCaegoriaComponent implements OnInit {
  categoria;
  ArryUsuario: any[] = [];
   id:any;
   nombre:string="";
   descripcion:string="";
   id_grupo_sucursal:string="";
  constructor(navParams: NavParams,public datosService: DatosAdminService, public http: Http,
    public modalCtrl : ModalController) { 
      this.id=navParams.get('value');
    }

  ngOnInit() {
    this.mostrar_Sucursal();
  }
 
  closeModal(){ this.modalCtrl.dismiss(); }

  mostrar_Sucursal(){
    this.http.get(this.datosService.servidor+'/api/Categoria/'+this.id)
    .subscribe(
    (datos) => { // Success
      let categoria = datos.json();
      categoria = Object.values(categoria);
      //this.categoria = Object.values(datos[0]);

      this.nombre=categoria[1];
      this.descripcion=categoria[2];
      this.id_grupo_sucursal=categoria[3];

      console.log(categoria);

    },
    (error) => {
      console.error(error);
    }
    )
}



Actualizar_Categoria(){

  if(this.nombre.length ==0){ 
    Swal.fire({ type: 'warning', title: 'Campo nombre vacío', showConfirmButton: false, timer: 1500 });
  }else if(this.descripcion.length ==0){ 
    Swal.fire({ type: 'warning', title: 'Campo descripción vacío', showConfirmButton: false, timer: 1500 });
  }else if(this.id_grupo_sucursal.length ==0){ 
    Swal.fire({ type: 'warning', title: 'Campo # Sucursal vacío', showConfirmButton: false, timer: 1500 });
  }else{
    
    let params = new FormData();

    params.append('id', this.id);
    params.append('nombre', this.nombre);
    params.append('descripcion', this.descripcion);
    params.append('id_grupo_sucursal', this.id_grupo_sucursal);

    this.http.post(this.datosService.servidor+'/api/modificar/Categoria/'+this.id, params)
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
