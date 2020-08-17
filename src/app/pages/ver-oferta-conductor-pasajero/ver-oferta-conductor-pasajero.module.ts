import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerOfertaConductorPasajeroPageRoutingModule } from './ver-oferta-conductor-pasajero-routing.module';

import { VerOfertaConductorPasajeroPage } from './ver-oferta-conductor-pasajero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerOfertaConductorPasajeroPageRoutingModule
  ],
  declarations: [VerOfertaConductorPasajeroPage]
})
export class VerOfertaConductorPasajeroPageModule {}
