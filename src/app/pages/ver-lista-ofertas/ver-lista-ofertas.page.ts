import { Component, OnInit, ApplicationRef } from '@angular/core';
import { OSNotificationPayload } from '@ionic-native/onesignal/ngx';
import { PushService } from '../../services/push.service';

@Component({
  selector: 'app-ver-lista-ofertas',
  templateUrl: './ver-lista-ofertas.page.html',
  styleUrls: ['./ver-lista-ofertas.page.scss'],
})
export class VerListaOfertasPage implements OnInit {

  mensajes: OSNotificationPayload[] = [];

  constructor(private pushService: PushService,
              private applicationRef: ApplicationRef) { }

  ngOnInit() {

    this.pushService.pushListener.subscribe( noti => {
      this.mensajes.unshift( noti );
      this.applicationRef.tick();
    });
  }

  async ionViewWillEnter() {
    console.log('cargaron los mensajes - will enter');
    this.mensajes = await this. pushService.getMensajes();
  }

}
