import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerarOfertaPageRoutingModule } from './generar-oferta-routing.module';

import { GenerarOfertaPage } from './generar-oferta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenerarOfertaPageRoutingModule
  ],
  declarations: [GenerarOfertaPage]
})
export class GenerarOfertaPageModule {}
