import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Vehiculo, Usuario } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';
import { UsuarioService } from './usuario.service';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

vehiculo: Vehiculo;
v: Vehiculo[] = [];

  constructor(private http: HttpClient,
              private storage: Storage,
              private usuarioService: UsuarioService,
              // tslint:disable-next-line: deprecation
              private fileTransfer: FileTransfer) { }



  subirArchivos( img: string, nombreFoto: string) {

    const options: FileUploadOptions = {

      fileKey: 'imagen',
      headers: {
        'x-token': this.usuarioService.token
      }
    };

    const fileTransfer: FileTransferObject = this.fileTransfer.create();

    fileTransfer.upload(img, `${ URL }/vehiculo/upload/${ nombreFoto }`, options)
    .then( data => {
      console.log(data);
    }).catch( err => {
      console.error('error al cargar', err);
    });

  }



  registroVehiculo( vehiculo: Vehiculo ) {

    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    return new Promise(async resolve => {

       await this.http.post(`${ URL }/vehiculo/create/`, vehiculo, { headers } )
          .subscribe( async resp => {
            console.log(resp);

            this.vehiculo = resp['vehiculo'];

            if ( resp['ok'] ) {
              resolve(true);
            } else {
              resolve(false);
            }

          });


    });


  }

  registroConductorvehiculo(){

    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    const usuario = this.usuarioService.getUsuario();
    
    console.log('Estos son los datos del vehiculo', this.vehiculo);

    const registro = {
      codVehiculo: this.vehiculo.idVehiculo,
      codConductor: usuario.idUsuario
    };

    return new Promise(async resolve => {

      await this.http.post(`${ URL }/conductor/conductor-vehiculo`, registro, { headers })
         .subscribe( async resp => {

           if ( resp['ok'] ) {
             resolve(true);
           } else {
             resolve(false);
           }

         });


   });
  }


  buscarVehiculo(idVehiculo: string){

    return new Promise( resolve => {
      this.http.get(`${ URL }/vehiculo/buscarVehiculo/${ idVehiculo }`).subscribe( async resp => {

        if ( resp['ok'] ) {
          this.v.push(resp['vehiculos']);
          resolve(true);
        }else {
          resolve(false);
        }
      });
    });

  }


}
