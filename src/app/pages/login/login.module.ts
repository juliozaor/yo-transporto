import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { ComponentsModule } from '../../components/components.module';
import { ModalTerminosPage } from '../modal-terminos/modal-terminos.page';
import { ModalTerminosPageModule } from '../modal-terminos/modal-terminos.module';

@NgModule({
  entryComponents:[
ModalTerminosPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ModalTerminosPageModule,
    ComponentsModule,
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
