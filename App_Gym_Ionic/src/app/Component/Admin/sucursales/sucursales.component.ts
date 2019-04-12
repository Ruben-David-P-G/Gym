import { Component, OnInit } from '@angular/core';
import { ModalController  } from '@ionic/angular';
import { DatosAdminService } from '../../../services/datos-admin.service';
import { RegSucursalesComponent } from '../Modal/reg-sucursales/reg-sucursales.component';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.scss'],
})

export class SucursalesComponent implements OnInit {
  sucursal: any[] = [];
  i:string="";
  
  constructor(public datosService: DatosAdminService,
    public modalCtrl : ModalController) {
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

  EliminarArticulo(datos) {
    let confirmacion = confirm('¿Realmente deseas eliminar este articulo?');
    if (confirmacion == true) {
      this.i=this.sucursal[datos].id;
/*
      let formDat = new FormData();
      formDat.append('clave', this.sucursal[datos].pk_articulo);

      this.http.post(this._Articulos.localhost_nombre + 'eliminar_articulo.php', formDat)
        .subscribe((data) => {
          console.log(data);

          let jsonResponse = data.json();
        });

      alert('Se elimino el articulo ' + this.sucursal[datos].nom_articulo);

      this.consultarArticulos();
*/
    }
    else {
      //alert('Haces otra cosa'); 
    }
  }

}
