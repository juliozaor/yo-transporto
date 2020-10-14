import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConductorService } from '../../services/conductor.service';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { ChatsPage } from '../chats/chats.page';
import { PushService } from '../../services/push.service';
import { ModalCalificacionPage } from '../modal-calificacion/modal-calificacion.page';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-ver-oferta-conductor-pasajero',
  templateUrl: './ver-oferta-conductor-pasajero.page.html',
  styleUrls: ['./ver-oferta-conductor-pasajero.page.scss'],
})
export class VerOfertaConductorPasajeroPage implements OnInit {

  desde: string;
  oferta: any;

  //descuento: number;
  valor: string;
  contraoferta: number;

  habilitarBoton = false;
  habilitarChat = true;

  idConductorOfertaPasajero: any;
  aceptada = false;

  constructor(private activatedRoute: ActivatedRoute,
              private conductorService: ConductorService,
              private alertController: AlertController,
              private modalCtrl: ModalController,
              private navCtrl: NavController,
              private push: PushService,
              ) { }

  ngOnInit() {

    this.desde = this.activatedRoute.snapshot.paramMap.get("from");

    this.oferta = this.conductorService.ofertaPasajero;

    
    /* this.descuento = this.oferta.oferta.tarifa;
    this.descuento = this.descuento - (this.descuento * 0.1); */
    
    this.valor = this.oferta.oferta.tarifa;


    
    if ( this.desde === '2'){
      this.habilitarBoton = true;
      if (this.oferta.completa.aceptada){
        this.habilitarChat = false;
        this.aceptada = true;
      }
    }

    console.log(this.oferta);

  }


  

  async aceptar(){

    const alert = await this.alertController.create({
      message: 'Esta seguro de aceptar esta oferta',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Aceptar',
          handler: () => {
            const datos = {
              codOfertaPasajero: this.oferta.oferta.idOfertaPasajero,
              valor: String(this.valor)

            };

           // console.log(this.valor);
          // guardar en pasajero-ofertaConductor
            this.conductorService.aceptarOferta(datos).subscribe( resp => {
              this.habilitarBoton = true;





            //  this.habilitarChat = false;

            //  this.idConductorOfertaPasajero = resp.conductor.idConductorOfertaPasajero;
             // this.navCtrl.navigateRoot( `/chats/${ resp.conductor.idPasajeroOfertaConductor}`, { animated: true } );
            //  this.conductorService.ofertaPasajero = this.oferta;
              
              this.navCtrl.navigateRoot( `/conductor`, { animated: true } );


            });

            const datosE = {
              mensaje: 'Un conductor a aceptado su oferta y esta a la espera de su confirmación',
              titulo: 'Oferta Aceptada',
              idSignal: this.oferta.usuario.idSignal
            };

            const EnviarOferta = {
              oferta: this.oferta.oferta,
              lugar: 'aceptar oferta de pasajero'
            };

            const datosJson = JSON.stringify(datosE);
            const datasJson = JSON.stringify(EnviarOferta);


            /* this.push.enviarNotificacion(datosJson, datasJson).subscribe( resp => {
              console.log(resp);
            }); */


          }
        }
      ]
    });

    await alert.present();

  }


  async chat(){

    if ( this.desde === '2'){
      this.idConductorOfertaPasajero = this.oferta.completa.idConductorOfertaPasajero;
    }
    const modal = await this.modalCtrl.create({
      component: ChatsPage,
      componentProps: {
        idOferta: this.idConductorOfertaPasajero,
        nombre: this.oferta.usuario.nombre
      }
    });
    await modal.present();
  }


  async calificar() {
    const modal = await this.modalCtrl.create({
      component: ModalCalificacionPage,
      componentProps: {
        conductor: false,
        cod: this.oferta.usuario.idUsuario
      }
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();

    }


    /* atras(){
      location.href = '#/conductor';
    } */

}
