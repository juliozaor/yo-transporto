import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerarOfertaPage } from './generar-oferta.page';

const routes: Routes = [
  {
    path: '',
    component: GenerarOfertaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerarOfertaPageRoutingModule {}
