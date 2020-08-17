import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfertasConductorPage } from './ofertas-conductor.page';

const routes: Routes = [
  {
    path: '',
    component: OfertasConductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfertasConductorPageRoutingModule {}
