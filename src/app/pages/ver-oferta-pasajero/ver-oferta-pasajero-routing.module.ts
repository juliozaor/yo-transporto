import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerOfertaPasajeroPage } from './ver-oferta-pasajero.page';

const routes: Routes = [
  {
    path: '',
    component: VerOfertaPasajeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerOfertaPasajeroPageRoutingModule {}
