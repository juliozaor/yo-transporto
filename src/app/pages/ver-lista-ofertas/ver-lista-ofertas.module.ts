import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerListaOfertasPageRoutingModule } from './ver-lista-ofertas-routing.module';

import { VerListaOfertasPage } from './ver-lista-ofertas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerListaOfertasPageRoutingModule
  ],
  declarations: [VerListaOfertasPage]
})
export class VerListaOfertasPageModule {}
