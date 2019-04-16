import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ModalController  } from '@ionic/angular';
import { DatosAdminService } from '../../../services/datos-admin.service';
import { RegCaegoriasComponent } from '../Modal/reg-caegorias/reg-caegorias.component';
import { VerCaegoriaComponent } from '../Modal/ver-caegoria/ver-caegoria.component';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent implements OnInit {
  categoria: any[] = [];
  ruta:string="";
  constructor(public datosService: DatosAdminService, 
    public modalCtrl : ModalController,public http: HttpClient) { }

  ngOnInit() {
    this.listarCategorias();
  }

  listarCategorias(){
    this.datosService.ver_categorias()
      .subscribe(
      (datos) => { // Success
        this.categoria = Object.values(datos);
        //console.log(this.sucursal);
      },
      (error) => {
        console.error(error);
      }
      )
  }


  async openModal_Registrar() {
    const modal = await this.modalCtrl.create({
      component: RegCaegoriasComponent,
      componentProps: { value: 0 }
    });

    modal.onDidDismiss().then((d: any) => this.listarCategorias());
    return await modal.present();
  }


  EliminarCategoria(datos) {

    this.ruta=this.datosService.servidor+'/api/delete/Categoria/'+this.categoria[datos].id;
    Swal.fire({
      title: '¿Quieres eliminar la Categoria '+this.categoria[datos].nombre+'?',
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
                  Swal.fire({ type: 'success', title: 'La Categoria ha sido eliminada.', showConfirmButton: false, timer: 1500 });
                  this.listarCategorias();
            }, err => {
              console.log(err);
              Swal.fire({ type: 'error', title: 'Error', showConfirmButton: false, timer: 1500 });
              this.listarCategorias();
            });
        });

      }else{
        Swal.fire({ type: 'info',title: 'Cancelado!',showConfirmButton: false,timer: 1500 });
      }
    })
  }


  async Ver_Categoria(datos) {

    
    const modal = await this.modalCtrl.create({
      component: VerCaegoriaComponent,
      componentProps: { value: this.categoria[datos].id }
    });

    modal.onDidDismiss().then((d: any) => this.listarCategorias());
    return await modal.present();

  }



}
