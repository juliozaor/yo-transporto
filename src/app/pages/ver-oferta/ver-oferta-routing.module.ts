import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerOfertaPage } from './ver-oferta.page';

const routes: Routes = [
  {
    path: '',
    component: VerOfertaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerOfertaPageRoutingModule {}
