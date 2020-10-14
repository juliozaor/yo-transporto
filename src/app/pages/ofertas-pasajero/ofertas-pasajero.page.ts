import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, IonSlides, IonList, NavController, IonContent } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/interfaces';

@Component({
  selector: 'app-ofertas-pasajero',
  templateUrl: './ofertas-pasajero.page.html',
  styleUrls: ['./ofertas-pasajero.page.scss'],
})
export class OfertasPasajeroPage implements OnInit {

  usuario: Usuario;
  ofertas: any[] = [];
  aceptadas: any[] = [];

  @ViewChild('slides') slides: IonSlides;

  @ViewChild('lista') lista: IonList;

  @ViewChild('content') content: IonContent;

  habilitado = true;
  tipo: string;

  constructor(private menuCtrl: MenuController,
              private usuarioService: UsuarioService,
              private navCtrl: NavController) { }

  ngOnInit() {

    this.cargarOfertas(false, true);


  }

  async cargarOfertas(event?, pull: boolean = false){

    this.usuarioService.getUsuarioToken().then((result) => {
      this.usuario = result;

      this.usuarioService.buscarOfertasCPasajero(this.usuario.idUsuario, pull).subscribe( resp => {
        console.log(resp.ofertas);
        this.ofertas.push(...resp.ofertas);
        if ( event ){
          event.target.complete();
    
          if (resp.ofertas.length === 0 && this.tipo === 'ofertadas'){
            
            this.habilitado = false;
          }
    
        }
      });

      this.usuarioService.ofertasAceptadas(this.usuario.idUsuario, pull).subscribe( resp => {
        this.aceptadas.push(...resp.ofertas);
        if ( event ){
          console.log('entro al si', resp.ofertas.length);
          event.target.complete();
    
          if (resp.ofertas.length === 0 && this.  tipo === 'aceptadas'){
            
            this.habilitado = false;
          }
    
    
        }
      });

     
  


    }).catch((err) => {
      console.log(err);
    });
    // consultar las ofertas
   
  
    
  
  }



  recargar(event?){
    this.aceptadas = [];
    this.ofertas = [];
    this.cargarOfertas(event, true);
    this.habilitado = true;

  }

  

  toggleMenu(){
    this.menuCtrl.toggle();
  }


  segmentChanged(evento) {
    const valorSegmento = evento.detail.value;
    console.log(valorSegmento);

    if (valorSegmento === 'aceptadas') {
      this.slides.lockSwipes(false);
      this.slides.slideTo(1);
      this.slides.lockSwipes(true);
      this.content.scrollToTop();
      this.tipo = 'aceptadas';
      return;
    }

    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
    this.content.scrollToTop();
    this.tipo = 'ofertadas';
  }

  verOfertaConductor(oferta){

    this.usuarioService.ofertaConductor = oferta;

    this.navCtrl.navigateRoot( `/ver-oferta/2`, { animated: true } );

  }

  verOfertaPasajero(oferta){

    this.usuarioService.ofertaPasajero = oferta;

    this.navCtrl.navigateRoot( `/ver-oferta-pasajero`, { animated: true });

  }



}
