import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCalificacionPageRoutingModule } from './modal-calificacion-routing.module';

import { ModalCalificacionPage } from './modal-calificacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCalificacionPageRoutingModule
  ],
  declarations: [ModalCalificacionPage]
})
export class ModalCalificacionPageModule {}
