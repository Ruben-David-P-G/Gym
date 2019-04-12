import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosAdminService {
  servidor:string="http://127.0.0.1:8000";
  constructor(public http: HttpClient) { }

  ver_sucursales(){
    return this.http.get(this.servidor+'/api/Sucursal');
  }
}
