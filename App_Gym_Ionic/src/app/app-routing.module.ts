import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SucursalesComponent } from './Component/Admin/sucursales/sucursales.component';
import { RegSucursalesComponent } from './Component/Admin/Modal/reg-sucursales/reg-sucursales.component';
import { VerSucursalComponent } from './Component/Admin/Modal/ver-sucursal/ver-sucursal.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'sucursales-admin', 
    loadChildren: './admin/sucursales-admin/sucursales-admin.module#SucursalesAdminPageModule' 
  },
  {  
    path: 'SucursalesComponent', component: SucursalesComponent 
  },
  {  
    path: 'RegSucursalesComponent', component: RegSucursalesComponent 
  },
  {  
    path: 'VerSucursalComponent', component: VerSucursalComponent 
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
