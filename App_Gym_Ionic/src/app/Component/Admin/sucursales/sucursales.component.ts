import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController  } from '@ionic/angular';
import { DatosAdminService } from '../../../services/datos-admin.service';
import { RegSucursalesComponent } from '../Modal/reg-sucursales/reg-sucursales.component';
import { VerSucursalComponent } from '../Modal/ver-sucursal/ver-sucursal.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.scss'],
})

export class SucursalesComponent implements OnInit {
  sucursal: any[] = [];
  i:string="";
  ruta:string="";
  constructor(public datosService: DatosAdminService, 
    public modalCtrl : ModalController,public http: HttpClient) {
  }
  ngOnInit() {
    this.listarSucursales();
  }

  listarSucursales(){
    this.datosService.ver_sucursales()
      .subscribe(
      (datos) => { // Success
        this.sucursal = Object.values(datos);
        //console.log(this.sucursal);
      },
      (error) => {
        console.error(error);
      }
      )
  }


  async openModal_Registrar() {
    const modal = await this.modalCtrl.create({
      component: RegSucursalesComponent,
      componentProps: { value: 0 }
    });

    modal.onDidDismiss().then((d: any) => this.listarSucursales());
    return await modal.present();
  }

  EliminarSucursal(datos) {

    this.ruta=this.datosService.servidor+'/api/delete/sucursal/'+this.sucursal[datos].id;
    Swal.fire({
      title: '¿Quieres eliminar la sucursal '+this.sucursal[datos].nombre_comercial+'?',
      text: "Una ves eliminada no se podrá recuperar.",
      type: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar'
    }).then((result) => {
      if (result.value) {

        return new Promise((resolve, reject) => {
          this.http.get(this.ruta)
          .subscribe(res => {
                  console.log(res);
                  Swal.fire({ type: 'success', title: 'La sucursal ha sido eliminada.', showConfirmButton: false, timer: 1500 });
                  this.listarSucursales();
            }, err => {
              console.log(err);
              Swal.fire({ type: 'error', title: 'Error', showConfirmButton: false, timer: 1500 });
              this.listarSucursales();
            });
        });

      }else{
        Swal.fire({ type: 'info',title: 'Cancelado!',showConfirmButton: false,timer: 1500 });
      }
    })
  }
 

 

  async Ver_Sucursal(datos) {

    this.i=this.sucursal[datos].id;
    const modal = await this.modalCtrl.create({
      component: VerSucursalComponent,
      componentProps: { value: this.i }
    });

    modal.onDidDismiss().then((d: any) => this.listarSucursales());
    return await modal.present();

  }

}
