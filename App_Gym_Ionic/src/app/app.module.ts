import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DatosAdminService } from "./services/datos-admin.service";
//import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { SucursalesComponent } from './Component/Admin/sucursales/sucursales.component';
import { RegSucursalesComponent } from './Component/Admin/Modal/reg-sucursales/reg-sucursales.component';
import { VerSucursalComponent } from './Component/Admin/Modal/ver-sucursal/ver-sucursal.component';

import { CategoriasComponent } from './Component/Admin/categorias/categorias.component';
import { RegCaegoriasComponent } from './Component/Admin/Modal/reg-caegorias/reg-caegorias.component';
import { VerCaegoriaComponent } from './Component/Admin/Modal/ver-caegoria/ver-caegoria.component';


@NgModule({
  declarations: [
    AppComponent,
    SucursalesComponent,
    RegSucursalesComponent,
    VerSucursalComponent,
    CategoriasComponent,
    RegCaegoriasComponent,
    VerCaegoriaComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatosAdminService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
