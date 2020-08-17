import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionarRegistroPage } from './seleccionar-registro.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionarRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionarRegistroPageRoutingModule {}
