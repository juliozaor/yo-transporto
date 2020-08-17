import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IntOfertaUsuario } from '../../interfaces/interfaces';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ver-oferta-usuario',
  templateUrl: './ver-oferta-usuario.page.html',
  styleUrls: ['./ver-oferta-usuario.page.scss'],
})
export class VerOfertaUsuarioPage implements OnInit {

  private id: string;

  coords: string;

  oferta: IntOfertaUsuario;

  constructor(private dataServices: DataService,
              private activatedRoute: ActivatedRoute,
              private geolocation: Geolocation,
              private navCtrl: NavController) { }

  ngOnInit() {

    // Recibir el id de la oferta
    this.id = this.activatedRoute.snapshot.paramMap.get("id");


    // Obtener la ubicacion actual
    this.geolocation.getCurrentPosition().then((resp) => {

      this.coords = `${resp.coords.latitude},${resp.coords.longitude}`;

     }).catch((error) => {
       console.log('Error getting location', error);
     });

    // almacenar en una variable la oferta seleccionada
    this.dataServices.getListaOpts().subscribe( (resp: any) => {
      let i: number;
      resp.forEach(oferta => {
        if ( this.id === oferta.idOferta ){
           /*  this.origen = oferta.origen;
            this.destino = oferta.destino; */
            this.oferta = oferta;
        }
        i++;
      });
    });



  }

  aceptar(){
    this.navCtrl.navigateRoot( `/chats/${this.oferta.idOferta}`, { animated: true } );
  }

}
