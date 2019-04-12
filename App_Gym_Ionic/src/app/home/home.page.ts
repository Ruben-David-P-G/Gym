import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario:string= "";
  contrasena:string= "";

  login(){

    if(this.usuario.length ==0){ 
      alert("Campo usuario vacío");
    }else if(this.contrasena.length == 0){ 
      alert("Campo contraseña vacío");
    }else{
      //alert("El usuario es: "+this.usuario+" y la contraseña es: "+this.contrasena);
      this.validarUsuarios();
      
    }
    

  }

  validarUsuarios() {
    
  }
}
