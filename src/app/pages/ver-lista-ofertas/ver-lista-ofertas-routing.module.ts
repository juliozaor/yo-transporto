import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerListaOfertasPage } from './ver-lista-ofertas.page';

const routes: Routes = [
  {
    path: '',
    component: VerListaOfertasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerListaOfertasPageRoutingModule {}
