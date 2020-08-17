import { Injectable, EventEmitter } from '@angular/core';
import { OneSignal, OSNotification, OSNotificationPayload } from '@ionic-native/onesignal/ngx';
import { Storage } from '@ionic/storage';
import { async } from '@angular/core/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioService } from './usuario.service';
import { environment } from '../../environments/environment';
import { NavController } from '@ionic/angular';
import { ConductorService } from './conductor.service';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PushService {

  mensajes: OSNotificationPayload[] = [
    /* {
      title: 'titulo de la push ',
      body: 'Este es el body de la push',
      date: new Date()

    } */
  ];


  oferta: any;

  userId: string;

  pushListener = new EventEmitter<OSNotificationPayload>();

  constructor(private oneSignal: OneSignal,
              private storage: Storage,
              private http: HttpClient,
              private usuarioService: UsuarioService,
              private conductorService: ConductorService,
              private navCtrl: NavController){

                this.cargarMensajes();
              }

  async getMensajes() {
    await this.cargarMensajes();
    return [...this.mensajes];
  }

  configuracionInicial(){

    this.oneSignal.startInit('9f2e2722-8482-4865-8c81-d722103fb75c', '856156621973');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    this.oneSignal.handleNotificationReceived().subscribe(( noti ) => {
     // do something when notification is received
     console.log('notificacion recibida', noti);
     this.notificacionRecibida( noti, '1' );
    });

    this.oneSignal.handleNotificationOpened().subscribe( async ( noti ) => {
      // do something when a notification is opened
      console.log('notificacion abierta', noti);
      await this.notificacionRecibida( noti.notification, '2' );
    });

    // Obtener ID del subscriptor
    this.oneSignal.getIds().then( info => {
        this.userId = info.userId;
    });


    this.oneSignal.endInit();
  }

  async notificacionRecibida( noti: OSNotification, resp ){
    const recibirOferta = noti.payload.additionalData;

    if ( resp === '2'){

      if (recibirOferta.lugar === 'aceptar pasajero'){
     // this.oferta = recibirOferta.oferta;
     // console.log(this.oferta);

      this.usuarioService.ofertaConductor = await recibirOferta.oferta;

      this.navCtrl.navigateRoot( `/ofertas-pasajero`, { animated: true } );

     
      }else if (recibirOferta.lugar === 'aceptar oferta de pasajero'){

        this.navCtrl.navigateRoot( `/ver-oferta-pasajero`, { animated: true });

      }else if (recibirOferta.lugar === 'aceptar oferta de conductor'){

         this.navCtrl.navigateRoot( `/conductor`, { animated: true });

       }else if (recibirOferta.lugar === 'aceptar pasajero'){
        // this.oferta = recibirOferta.oferta;
        // console.log(this.oferta);

         this.conductorService.ofertaPasajero = await recibirOferta.oferta;

         this.navCtrl.navigateRoot( `/ver-oferta-conductor-pasajero/2`, { animated: true } );


         }


    }

    /* await this.cargarMensajes();

    const payload = noti.payload;

    const existePush = this.mensajes.find( mensaje => mensaje.notificationID === payload.notificationID );

    if ( existePush ){
      return;
    }

    this.mensajes.unshift( payload );
    this.pushListener.emit( payload );

    await this.guardarMensajes(); */
  }

  guardarMensajes() {

    this.storage.set('mensajes', this.mensajes);
  }

  async cargarMensajes() {
   /* this.storage.clear(); */
   this.mensajes = await this.storage.get ('mensajes') || [];

   return this.mensajes;

  }

  async borrarMensajes(){
    await this.storage.remove('mensajes');
    this.mensajes = [];
    this.guardarMensajes();
  }

  enviarNotificacion(datos, oferta){

    //const datos = { titulo, mensaje, idSignal };


    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    return this.http.post<any>(`${ URL }/notificacion/?datos=${datos}&data=${oferta}`, '',  { headers } );


  }

}


