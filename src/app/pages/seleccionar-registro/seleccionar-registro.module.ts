import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionarRegistroPageRoutingModule } from './seleccionar-registro-routing.module';

import { SeleccionarRegistroPage } from './seleccionar-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionarRegistroPageRoutingModule
  ],
  declarations: [SeleccionarRegistroPage]
})
export class SeleccionarRegistroPageModule {}
