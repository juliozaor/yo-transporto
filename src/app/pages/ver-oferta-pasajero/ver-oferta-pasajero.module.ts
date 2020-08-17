import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerOfertaPasajeroPageRoutingModule } from './ver-oferta-pasajero-routing.module';

import { VerOfertaPasajeroPage } from './ver-oferta-pasajero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerOfertaPasajeroPageRoutingModule
  ],
  declarations: [VerOfertaPasajeroPage]
})
export class VerOfertaPasajeroPageModule {}
