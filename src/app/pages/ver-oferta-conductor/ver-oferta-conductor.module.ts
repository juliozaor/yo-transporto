import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerOfertaConductorPageRoutingModule } from './ver-oferta-conductor-routing.module';

import { VerOfertaConductorPage } from './ver-oferta-conductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerOfertaConductorPageRoutingModule
  ],
  declarations: [VerOfertaConductorPage]
})
export class VerOfertaConductorPageModule {}
