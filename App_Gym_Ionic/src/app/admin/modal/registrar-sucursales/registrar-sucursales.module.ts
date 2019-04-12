import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegistrarSucursalesPage } from './registrar-sucursales.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarSucursalesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegistrarSucursalesPage]
})
export class RegistrarSucursalesPageModule {}
