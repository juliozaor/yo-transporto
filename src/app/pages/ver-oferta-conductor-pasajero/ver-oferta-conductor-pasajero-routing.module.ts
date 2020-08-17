import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerOfertaConductorPasajeroPage } from './ver-oferta-conductor-pasajero.page';

const routes: Routes = [
  {
    path: '',
    component: VerOfertaConductorPasajeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerOfertaConductorPasajeroPageRoutingModule {}
