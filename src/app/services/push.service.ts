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

  activadas = false;

  swLocation = '/ngsw-worker.js';

  swReg: any;


  constructor(private oneSignal: OneSignal,
              private storage: Storage,
              private http: HttpClient,
              private usuarioService: UsuarioService,
              private conductorService: ConductorService,
              private navCtrl: NavController){

               // this.cargarMensajes();

              }



  getActivadas(){
    return this.activadas;
  }

  configuracionInicial(){

   // confirmar si se puede usar el sw
    if ( navigator.serviceWorker){

         navigator.serviceWorker.getRegistration().then( reg => {
             // this.swReg = reg;
             // console.log('activadas', this.activadas);

             reg.pushManager.getSubscription().then(this.verificaSuscripcion);
              //console.log('entro1:', this.swReg );
              //this.swReg.pushManager.getSubscription().then( this.verificaSuscripcion);
              
          });

     }

  }

  verificaSuscripcion( act ){

    if ( act ){

      console.log('verificar verdadera');
      this.activadas = true;
    }else{
      console.log('verificar falsa');
      this.activadas = false;
    }
  }

  enviarNotificacion() {

    const notificationOpts = {
      body: 'Este es el cuerpo de la notificación',
      icon: '../assets/icons/icon-72x72.png'
    };

    const n = new Notification('Hola mundo!', notificationOpts);

    n.onclick = () => {
      console.log('click');
    };
  }


  notificarme() {

    if ( !window.Notification ) {
      console.log('Este navegador no soporta notificaciones');
      return;
    }

    if ( Notification.permission === 'granted' ) {

        this.enviarNotificacion();

    }else if ( (Notification.permission === 'default') || (Notification.permission !== 'denied')  ){

      Notification.requestPermission ( ( permission ) => {
        console.log( permission );
        if ( permission === 'granted' ) {
          // tslint:disable-next-line: no-unused-expression
          this.enviarNotificacion();
        }
      });
    }
  }

  getPublicKey() {
   return fetch(`${ URL }/notificacion/key/`)
        .then( res => res.arrayBuffer())
        .then(key => new Uint8Array(key));
  }

  activarNotificaciones(){
    //console.log('entro3:', this.swReg );
    /* if ( !this.swReg ){
      return console.log('No hay registro SW');
    } */

    this.getPublicKey().then( function( key ) {


      navigator.serviceWorker.getRegistration().then( reg => {
        reg.pushManager.subscribe( {
          userVisibleOnly: true,
          applicationServerKey: key
        }).then(res => res.toJSON())
        .then( suscripcion => {
          console.log(suscripcion);

          this.verificaSuscripcion(suscripcion);

      });
      });


    });
  }



}


