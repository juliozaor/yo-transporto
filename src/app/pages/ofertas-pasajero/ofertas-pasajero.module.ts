import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfertasPasajeroPageRoutingModule } from './ofertas-pasajero-routing.module';

import { OfertasPasajeroPage } from './ofertas-pasajero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfertasPasajeroPageRoutingModule
  ],
  declarations: [OfertasPasajeroPage]
})
export class OfertasPasajeroPageModule {}
