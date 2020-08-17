import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { MapaComponent } from './mapa/mapa.component';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';
import { OfertaComponent } from './oferta/oferta.component';



@NgModule({
  declarations: [
    AvatarSelectorComponent,
    MenuComponent,
    MapaComponent,
    ChatComponent,
    OfertaComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    AvatarSelectorComponent,
    MenuComponent,
    MapaComponent,
    ChatComponent,
    OfertaComponent
  ]
})
export class ComponentsModule { }
