import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VehiculoService } from '../../services/vehiculo.service';
import { UiServiceService } from '../../services/ui-service.service';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActivatedRoute } from '@angular/router';


declare var window: any;



@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.page.html',
  styleUrls: ['./vehiculo.page.scss'],
})
export class VehiculoPage implements OnInit {

  tempImages: string[] = [];

  id: string;
  registerVehiculo = {

    marca: 'Toyota',
    modelo: 'Auris',
    placa: 'TA01S',
    color: 'Azul'

  };

  constructor(private vechiculoService: VehiculoService,
              private uiService: UiServiceService,
              private camera: Camera,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   /*  this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log('este es el id que viene: ', this.id); */
  }


 async registroVehiculo( fRegistro: NgForm ){

    if ( fRegistro.invalid ) { return; }

    const valido = await this.vechiculoService.registroVehiculo( this.registerVehiculo );

    if ( valido ) {
      // navegar al tabs
     // this.navCtrl.navigateRoot( '/vehiculoS', { animated: true } );
     this.uiService.alertaInformativa('Automovil registrado.');
    } else {
      // mostrar alerta de usuario y contraseña no correctos
      this.uiService.alertaInformativa('la placa ya existe.');
    }

  }

  camara() {

    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.CAMERA
    }

    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):

  const img = window.Ionic.WebView.converFileScr (imageData);

    }, (err) => {
     // Handle error
    });
  }



}
