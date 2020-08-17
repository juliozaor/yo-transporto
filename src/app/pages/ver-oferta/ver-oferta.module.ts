import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerOfertaPageRoutingModule } from './ver-oferta-routing.module';

import { VerOfertaPage } from './ver-oferta.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    VerOfertaPageRoutingModule
  ],
  declarations: [VerOfertaPage]
})
export class VerOfertaPageModule {}
