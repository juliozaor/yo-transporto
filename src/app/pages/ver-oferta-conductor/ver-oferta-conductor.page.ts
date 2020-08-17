import { Component, OnInit } from '@angular/core';
import { ConductorService } from '../../services/conductor.service';
import { OfertaConductor } from '../../interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';
import { NavController, ModalController, AlertController, ActionSheetController } from '@ionic/angular';
import { ChatsPage } from '../chats/chats.page';
import { promise } from 'protractor';
import { PushService } from '../../services/push.service';

@Component({
  selector: 'app-ver-oferta-conductor',
  templateUrl: './ver-oferta-conductor.page.html',
  styleUrls: ['./ver-oferta-conductor.page.scss'],
})
export class VerOfertaConductorPage implements OnInit {

  oferta: OfertaConductor;
  ofertasAceptadas: any[] = [];
  pasajeros: any[] = [];
  
  habilitarChat = false;
  habilitarRechazar = true;

  constructor(private conductorService: ConductorService,
              private usuarioService: UsuarioService,
              private navCtrl: NavController,
              private modalCtrl: ModalController,
              private alertController: AlertController,
              private actionSheetCtrl: ActionSheetController,
              private push: PushService) { }

  ngOnInit() {
    
    this.cargarDatos();
    

}


async cargarDatos(){

  this.oferta = await this.conductorService.ofertaConductor;

  this.conductorService.buscarOfertasAceptadas(this.oferta.idOfertaConductor).subscribe( resp => {
    this.ofertasAceptadas = resp.ofertas;

    this.ofertasAceptadas.forEach( u => {

      this.usuarioService.datosUsuario(u.codPasajero).subscribe( respP => {

        //console.log(u);

        const pasajero = {
            nombre: respP.usuario.nombre,
            codOfertaConductor: u.idPasajeroOfertaConductor,
            valor: u.valor,
            aceptada: u.aceptada,
            idSignal: respP.usuario.idSignal
        };

        this.habilitarChat = u.aceptada;
        this.pasajeros.push(pasajero);
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
    message: 'Esta seguro que desea aceptar este pasajero?',
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
          const valido = this.conductorService.actualizarPasajeroOfertaConductor(codPasajeroOfertaConductor, datos);

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
              lugar: 'aceptar pasajero'
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
    message: 'Esta seguro que desea rechazar este usuario?',
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
          const valido = this.conductorService.actualizarPasajeroOfertaConductor(codPasajeroOfertaConductor, datos);

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
            const valido = this.conductorService.terminarOferta(this.oferta.idOfertaConductor);

            if (valido) {
              this.navCtrl.navigateRoot( `/conductor`, { animated: true } );
            }
          }
        }
      ]
    });

    await alert.present();
  


}

}
