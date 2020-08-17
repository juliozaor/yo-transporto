import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { ModalController, AlertController, NavController } from '@ionic/angular';
import { ChatsPage } from '../chats/chats.page';
import { PushService } from '../../services/push.service';

@Component({
  selector: 'app-ver-oferta-pasajero',
  templateUrl: './ver-oferta-pasajero.page.html',
  styleUrls: ['./ver-oferta-pasajero.page.scss'],
})
export class VerOfertaPasajeroPage implements OnInit {

  oferta: any;
  habilitarChat = false;
  habilitarBoton = true;
  habilitarRechazar = true;

  ofertasAceptadas: any[] = [];
  conductores: any[] = [];

  constructor(private usuarioService: UsuarioService,
              private modalCtrl: ModalController,
              private alertController: AlertController,
              private navCtrl: NavController,
              private push: PushService) { }

  ngOnInit() {

    this.cargarDatos();

  }

  async cargarDatos(){

    this.oferta = await this.usuarioService.ofertaPasajero;
    console.log(this.oferta);
  
    this.usuarioService.buscarOfertasAceptadas(this.oferta.idOfertaPasajero).subscribe( resp => {
      this.ofertasAceptadas = resp.ofertas;

      this.ofertasAceptadas.forEach( u => {
  
        this.usuarioService.datosUsuario(u.codConductor).subscribe( respP => {
  
         // console.log(respP.usuario.nombre);
  
          const conductor = {
              nombre: respP.usuario.nombre,
              codOfertaConductor: u.idConductorOfertaPasajero,
              valor: u.valor,
              aceptada: u.aceptada,
              idSignal: respP.usuario.idSignal
          };
          this.habilitarChat = u.aceptada;
          this.conductores.push(conductor);
          
        });
  
  
      });
  
    });
  }

  async chatear(p){


    const modal = await this.modalCtrl.create({
      component: ChatsPage,
      componentProps: {
        idOferta: p.codOfertaConductor,
        nombre: p.nombre
      }
    });
    await modal.present();
  
  }

  async aceptar(codPasajeroOfertaConductor, signal){

    const alert = await this.alertController.create({
      message: 'Esta seguro que desea aceptar este conductor?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Aceptar',
          handler: async (blah) => {
            const datos = {
              estado: false,
              aceptada: true
            };
            const valido = this.usuarioService.actualizarConductorOfertaPasajero(codPasajeroOfertaConductor, datos);
  
            if (valido) {
              this.habilitarChat = true;
              this.habilitarRechazar = false;

              const datosE = {
                mensaje: 'El conductor aceptado su oferta',
                titulo: 'Oferta Aceptada',
                idSignal: signal
              };
    
              const EnviarOferta = {
                oferta: this.oferta,
                lugar: 'aceptar conductor'
              };
    
              const datosJson = JSON.stringify(datosE);
              const datasJson = JSON.stringify(EnviarOferta);
              console.log(datasJson);
    
              this.push.enviarNotificacion(datosJson, datasJson).subscribe( resp => {
                console.log(resp);
              });
            }
          }
        }
      ]
    });
  
    await alert.present();

  }
  
  async rechazar(codPasajeroOfertaConductor, index){
  
    const alert = await this.alertController.create({
      message: 'Esta seguro que desea rechazar este conductor?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Aceptar',
          handler: async (blah) => {
            const datos = {
              estado: true,
              aceptada: false
            };
            const valido = this.usuarioService.actualizarConductorOfertaPasajero(codPasajeroOfertaConductor, datos);
  
  
            if (valido) {
              this.ofertasAceptadas.splice(index, 1);
            }
          }
        }
      ]
    });
  
    await alert.present();
  }

  async finalizarOferta(){

    const alert = await this.alertController.create({
      message: 'Esta seguro que desea terminar esta oferta?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Aceptar',
          handler: async (blah) => {
            const valido = this.usuarioService.terminarOferta(this.oferta.idOfertaPasajero);

            if (valido) {
              this.navCtrl.navigateRoot( `/principal`, { animated: true } );
            }
          }
        }
      ]
    });

    await alert.present();
  


}

}
