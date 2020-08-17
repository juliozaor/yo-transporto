import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerOfertaUsuarioPageRoutingModule } from './ver-oferta-usuario-routing.module';

import { VerOfertaUsuarioPage } from './ver-oferta-usuario.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    VerOfertaUsuarioPageRoutingModule
  ],
  declarations: [VerOfertaUsuarioPage]
})
export class VerOfertaUsuarioPageModule {}
