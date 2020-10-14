import { Component, OnInit, ViewChild, ApplicationRef } from '@angular/core';
import { MenuController, IonSlides, IonLabel, IonItem, IonList, ToastController, NavController, IonSegment, IonContent } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Usuario, OfertaConductor } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { UsuarioService } from '../../services/usuario.service';
import { async } from '@angular/core/testing';
import { ConductorService } from '../../services/conductor.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Time } from '@angular/common';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {



  @ViewChild('slides') slides: IonSlides;

  @ViewChild('lista') lista: IonList;

  @ViewChild('content') content: IonContent;

  usuario: Usuario;

  ofertas: OfertaConductor[] = [];

  ofertasPasajero: any[] = [];

  ofertasAceptadas: any[] = [];

  conductor: any;

  coords: string;

  tipo: string;

  habilitado = true;

  //dataList: Observable<IntOfertaUsuario[]>;

  constructor(private menuCtrl: MenuController,
              private dataService: DataService,
              private toastCtrl: ToastController,
              private navCtrl: NavController,
              private usuarioService: UsuarioService,
              private conductorService: ConductorService,
              private geolocation: Geolocation,
              private applicationRef: ApplicationRef) { }

  ngOnInit() {

    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude

      this.coords = `${resp.coords.latitude},${resp.coords.longitude}`;
     // console.log(this.coords);


      }).catch((error) => {
        console.log('Error getting location', error);
      });


    this.usuarioService.getUsuarioToken().then(async user => {

      this.usuario = await user;

      await this.cargarOfertas(false, true);

    });

  }

  async cargarOfertas(event?, pull: boolean = false) {


   this.conductorService.datosConductor(this.usuario.idUsuario).subscribe(async cond => {

      let interU = 0;

      this.conductor = await cond.conductor;


      if ( this.conductor.esInterUrbano){
        interU = 1;
      }

      await this.conductorService.ofertasPasajeros(interU, this.usuario.idUsuario,
                                             this.conductor.ciudadOrigen,
                                             this.conductor.ciudadDestino, pull).subscribe(async resp => {


      await this.ofertasPasajero.push(...resp.ofertas);

      console.log(resp);

      if ( event ){
        event.target.complete();

        if (resp.ofertas.length === 0 && this.tipo === 'recibidas'){

          this.habilitado = false;
        }

      }

      });


    });


   this.conductorService.buscarOfertasConductor(this.usuario.idUsuario, pull).subscribe(async resp => {

      await this.ofertas.push(...resp.ofertas);

      if ( event ){
       // console.log('entro al si', resp.ofertas.length);
        event.target.complete();

        if (resp.ofertas.length === 0 && this.tipo === 'ofertadas'){

          this.habilitado = false;
        }

      }

    });

   this.conductorService.ofertasAceptadas(this.usuario.idUsuario, pull).subscribe(async resp => {
      await this.ofertasAceptadas.push(...resp.ofertas);

      if ( event ){
       // console.log('entro al si', resp.ofertas.length);
        event.target.complete();

        if (resp.ofertas.length === 0 && this.tipo === 'aceptadas'){

          this.habilitado = false;
        }

      }
      //console.log(this.ofertasAceptadas);
    });

  }

  recargar(event?){
    this.ofertasAceptadas = [];
    this.ofertas = [];
    this.ofertasPasajero = [];
    this.cargarOfertas(event, true);
    this.habilitado = true;

  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

  ionViewDidEnter() {
    this.slides.lockSwipes(true);
  }

  segmentChanged(evento) {
    const valorSegmento = evento.detail.value;
    //console.log(valorSegmento);

    if (valorSegmento === 'recibidas') {
      this.slides.lockSwipes(false);
      this.slides.slideTo(0);
      this.slides.lockSwipes(true);
      this.content.scrollToTop();
      this.tipo = 'recibidas';
      return;
    }else if (valorSegmento === 'ofertadas'){
      this.slides.lockSwipes(false);
      this.slides.slideTo(1);
      this.slides.lockSwipes(true);
      this.content.scrollToTop();
      this.tipo = 'ofertadas';
      return;
    }else {
      this.slides.lockSwipes(false);
      this.slides.slideTo(2);
      this.slides.lockSwipes(true);
      this.content.scrollToTop();
      this.tipo = 'aceptadas';
    }

    

  }

  

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  favorite( list ) {
    //console.log('favorite', user);
    this.presentToast('Guardo en favoritos');
    this.lista.closeSlidingItems();
  }

  share(list) {
    this.presentToast('Compartido');
    this.lista.closeSlidingItems();
  }

  borrar(list) {
    this.presentToast('Borrado');
    this.lista.closeSlidingItems();
  }

//
  /* verOfertaUsuario(idOferta){
    this.navCtrl.navigateRoot( `/ver-oferta-usuario/${idOferta}`, { animated: true } );
  } */

  verOfertaConductor(oferta: OfertaConductor){
    this.conductorService.ofertaConductor = oferta;
    this.navCtrl.navigateRoot( `/ver-oferta-conductor`, { animated: true } );
  }

  verOfertaPasajero(oferta){
 this.conductorService.ofertaPasajero = oferta;
 this.navCtrl.navigateRoot(`/ver-oferta-conductor-pasajero/1`, { animated: true } );
  }

  verOfertaAceptada(oferta){
    this.conductorService.ofertaPasajero = oferta;

    console.log(oferta);

    this.navCtrl.navigateRoot( `/ver-oferta-conductor-pasajero/2`, { animated: true } );
  }


 validar(fecha, com): boolean {

  let fechaActual = new Date();
  let fechaGuardada = new Date(fecha);

 

  fechaGuardada.setMinutes(fechaGuardada.getMinutes() + 120);



  console.log(com, ' : ', fechaActual.getTime(), ' , ', fechaGuardada.getTime());

  if (fechaActual.getTime() < fechaGuardada.getTime()){
    console.log('se va a mostrar');
    return true;
  }else{
    console.log('No se va a mostrar');
    return false;
  }


  }

}
