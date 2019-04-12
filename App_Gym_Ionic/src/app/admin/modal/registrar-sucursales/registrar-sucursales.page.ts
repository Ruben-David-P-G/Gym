import { NavController, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ViewController } from '@ionic/core';



@Component({
  selector: 'app-registrar-sucursales',
  templateUrl: './registrar-sucursales.page.html',
  styleUrls: ['./registrar-sucursales.page.scss'],
})

export class RegistrarSucursalesPage implements OnInit {
  solicitud:string="";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl : ViewController, public http: Http) {
    
  }
  public closeModal(){
    //this.viewCtrl._destroy();
}
  ngOnInit() {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPaginaPage');
  }

  Registrar_Solicitud(){
 
    if(this.solicitud.length ==0){ 
      alert("Campo solicitud vacío");
    }else{ 
      let params = new FormData();
      var logi=localStorage.getItem('log');
      var pk_agencia=localStorage.getItem('pk_agencia');
      var grupo=localStorage.getItem('grupo');
      params.append('solicitud', this.solicitud);
      params.append('log', logi);
      params.append('pk_agencia', pk_agencia);
      params.append('grupo', grupo);
  
      this.http.post('http://localhost/Ionic_Solicitud/registrar_solicitud.php', params)
        .subscribe((datos) => {
  
          let jsonResponse = datos.json();
          jsonResponse = Object.values(jsonResponse[0]);
          //this.viewCtrl.dismiss();
  
        });
      
    }
  }
}
