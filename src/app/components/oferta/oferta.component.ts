import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { OfertaConductorCompleta, Usuario } from '../../interfaces/interfaces';
import { NavController, IonButton, ModalController, AlertController } from '@ionic/angular';
import { viewClassName } from '@angular/compiler';
import { ChatsPage } from '../../pages/chats/chats.page';
import { PushService } from '../../services/push.service';
import { ModalCalificacionPage } from '../../pages/modal-calificacion/modal-calificacion.page';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss'],
})
export class OfertaComponent implements OnInit {


  oferta: any;

  idPasajeroOfertaConductor: any;
  aceptada = false;

  habilitarChat = true;
  habilitarBoton = false;

  //@Input() idTipoOferta: string;
  @Input() desde: string;

  contraoferta: number;
  valor: string;



  constructor(private usuarioService: UsuarioService,
              private navCtrl: NavController,
              private modalCtrl: ModalController,
              private alertController: AlertController,
              private push: PushService) { }

  ngOnInit() {

    this.oferta = this.usuarioService.ofertaConductor;




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
              codOfertaConductor: this.oferta.oferta.idOfertaConductor,
              valor: String(this.valor)

            };
          // guardar en pasajero-ofertaConductor
            this.usuarioService.aceptarOferta(datos).subscribe( resp => {
              this.habilitarBoton = true;
              
             // this.habilitarChat = false;

             // this.idPasajeroOfertaConductor = resp.conductor.idPasajeroOfertaConductor;
             // this.navCtrl.navigateRoot( `/chats/${ resp.conductor.idPasajeroOfertaConductor}`, { animated: true } );

            });


            const datosE = {
              mensaje: 'Un usuario a aceptado su oferta y esta a la espera de su confirmación',
              titulo: 'Oferta Aceptada',
              idSignal: this.oferta.usuario.idSignal
            };

            const EnviarOferta = {
              oferta: this.oferta.oferta,
              lugar: 'aceptar oferta de conductor'
            };

            const datosJson = JSON.stringify(datosE);
            const datasJson = JSON.stringify(EnviarOferta);
            

            this.push.enviarNotificacion(datosJson, datasJson).subscribe( resp => {
              console.log(resp);
            });

          }
        }
      ]
    });

    await alert.present();

  }


  async chat(){

    if ( this.desde === '2'){
      this.idPasajeroOfertaConductor = this.oferta.completa.idPasajeroOfertaConductor;
    }
    const modal = await this.modalCtrl.create({
      component: ChatsPage,
      componentProps: {
        idOferta: this.idPasajeroOfertaConductor,
        nombre: this.oferta.usuario.nombre
      }
    });
    await modal.present();
  }



/*   calificar(val){

    let v = 5;

    for (let i = 0; i < this.calificacion.length; i++) {
      if (i < val){
        this.calificacion[i].icon = 'star';
        v = val;
      }else {
        this.calificacion[i].icon = 'star-outline';
      }

    }

    console.log(v);
  } */


  async calificar() {
    const modal = await this.modalCtrl.create({
      component: ModalCalificacionPage,
      componentProps: {
        conductor: true,
        cod: this.oferta.usuario.idUsuario
      }
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();

    }




}
