import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, IonSlides } from '@ionic/angular';
import { Componente } from '../../interfaces/interfaces';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { UbicacionService } from '../../services/ubicacion.service';
import { UsuarioService } from '../../services/usuario.service';
import { async } from '@angular/core/testing';
import { UiServiceService } from '../../services/ui-service.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  componentes: Componente[] = [];
  coords: string;

  direccion: string;

  ubicacionActual: string;

  tipo = 1;

  ofertaCiudad: any = {
    origen: '',
    destino: '',
    tarifa: '',
    comentarios: '',
    aire: 'false',
    musica: 'false',
    asientos: 'false',
    maleta: 'false',
    codTipoServicio: '1'
  };

  ofertaEnvio: any = {
    destino: '',
    tarifa: '',
    comentarios: '',
    cantBolsas: '-4Bolsas',
    peso_kilos: '-100',
    origen: '',
    codTipoServicio: '3'
  };

  ofertaInter: any = {
    destino: '',
    tarifa: '',
    comentarios: '',
    pasajeros: '',
    aire: 'false',
    musica: 'false',
    asientos: 'false',
    maleta: 'false',
    origen: '',
    fecha: '',
    codTipoServicio: '2'
  };

  ofertaMercancia: any = {
    destino: '',
    tarifa: '',
    comentarios: '',
    origen: '',
    peso: '',
    fecha: '',
    codTipoServicio: '4'
  };

  @ViewChild('slides') slides: IonSlides;


  constructor( private menuCtrl: MenuController,
               private geolocation: Geolocation,
               public ubicacionService: UbicacionService,
               private usuarioService: UsuarioService,
               private ui: UiServiceService) { }

  ngOnInit() {
    
    this.geolocation.getCurrentPosition().then(async (resp) => {
      // resp.coords.latitude
      // resp.coords.longitude

      this.coords = await `${resp.coords.latitude},${resp.coords.longitude}`;

     }).catch((error) => {
       console.log('Error getting location', error);
     });

    /* this.ubicacionService.ubicacion.subscribe(direccion => {
        console.log(direccion);
        this.ofertaEnvio.origen = direccion;
        this.ofertaInter.origen = direccion;
        this.ofertaMercancia.origen = direccion;
        this.ofertaCiudad.origen = direccion;
     });
 */

  }

  ionViewDidEnter(){
    this.direccion = this.ubicacionService.getDireccion();
   /*  this.ofertaEnvio.origen = this.direccion;
    this.ofertaInter.origen = this.direccion;
    this.ofertaMercancia.origen = this.direccion;
    this.ofertaCiudad.origen = this.direccion; */
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

  ciudad(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
    this.tipo = 1;
  }

  mensajeria(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
    this.tipo = 3;
  }

  interurbano(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(2);
    this.slides.lockSwipes(true);
    this.tipo = 2;
  }

  mercancia(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(3);
    this.slides.lockSwipes(true);
    this.tipo = 4;
  }

  solicitarServicio(){

    this.convertirMayusculas();

    if (this.tipo === 1){
      this.generar(this.ofertaCiudad);
    }else if (this.tipo === 2){
      this.generar(this.ofertaInter);
    }else if (this.tipo === 3){
      this.generar(this.ofertaEnvio);
    }else if (this.tipo === 4){
      this.generar(this.ofertaMercancia);
    }

  }

 async generar(oferta){
    await this.usuarioService.crearOfertaPasajero(oferta).then( resp => {
      this.ui.alertaInformativa('Su oferta fue generada exitosamente, puede ver el estado de su oferta en el menú "Mis Ofertas"');
      this.borrar();
    });
  }

  async convertirMayusculas(){
    this.ofertaCiudad.destino = this.ofertaCiudad.destino.toUpperCase();
    this.ofertaEnvio.destino = this.ofertaEnvio.destino.toUpperCase();
    this.ofertaEnvio.origen = this.ofertaEnvio.origen.toUpperCase();
    this.ofertaInter.destino = this.ofertaInter.destino.toUpperCase();
    this.ofertaInter.origen = this.ofertaInter.origen.toUpperCase();
    this.ofertaMercancia.destino = this.ofertaMercancia.destino.toUpperCase();
    this.ofertaMercancia.origen = this.ofertaMercancia.origen.toUpperCase();

  }

  borrar(){
    
    this.ofertaCiudad = {
      origen: '',
      destino: '',
      tarifa: '',
      comentarios: '',
      aire: 'false',
      musica: 'false',
      asientos: 'false',
      maleta: 'false',
      codTipoServicio: '1'
    };
  
    this.ofertaEnvio = {
      destino: '',
      tarifa: '',
      comentarios: '',
      cantBolsas: '-4Bolsas',
      peso_kilos: '-100',
      origen: '',
      codTipoServicio: '3'
    };
  
    this.ofertaInter = {
      destino: '',
      tarifa: '',
      comentarios: '',
      pasajeros: '',
      aire: 'false',
      musica: 'false',
      asientos: 'false',
      maleta: 'false',
      origen: '',
      fecha: '',
      codTipoServicio: '2'
    };
  
    this.ofertaMercancia = {
      destino: '',
      tarifa: '',
      comentarios: '',
      origen: '',
      peso: '',
      fecha: '',
      codTipoServicio: '4'
    };
  }



}
