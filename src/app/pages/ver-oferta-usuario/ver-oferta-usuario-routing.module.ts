import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerOfertaUsuarioPage } from './ver-oferta-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: VerOfertaUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerOfertaUsuarioPageRoutingModule {}
