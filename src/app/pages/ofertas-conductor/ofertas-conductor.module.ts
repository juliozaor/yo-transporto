import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfertasConductorPageRoutingModule } from './ofertas-conductor-routing.module';

import { OfertasConductorPage } from './ofertas-conductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfertasConductorPageRoutingModule
  ],
  declarations: [OfertasConductorPage]
})
export class OfertasConductorPageModule {}
