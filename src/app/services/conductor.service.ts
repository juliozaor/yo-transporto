import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { promise } from 'protractor';
import { async } from '@angular/core/testing';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { UsuarioService } from './usuario.service';
import { Storage } from '@ionic/storage';
import { Conductor, OfertaConductor, RespuestaConductor } from '../interfaces/interfaces';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ConductorService {

  conductor: Conductor;
  vehiculos: any;

  ofertaConductor: OfertaConductor;
  ofertaPasajero: any;
  pagina = 0;

  constructor(private http: HttpClient,
              // tslint:disable-next-line: deprecation
              private fileTransfer: FileTransfer,
              private usuarioService: UsuarioService,
              private storage: Storage) { }


  buscarConductor(idUsuario: string){
    return new Promise( resolve => {
      this.http.get(`${ URL }/conductor/buscar/${ idUsuario }`).subscribe( async resp => {
        if ( resp['ok'] ) {
          resolve(true);
        }else {
          resolve(false);
        }
      });
    });
  }

  datosConductor(idUsuario: string){
     return this.http.get<RespuestaConductor>(`${ URL }/conductor/buscar/${ idUsuario }`);
  }


  buscarVehiculosConductor(idUsuario: string){
    return new Promise( resolve => {
      this.http.get(`${ URL }/conductor/buscarVehiculoConductor/${ idUsuario }`).subscribe( async resp => {
        
        
        if ( resp['ok'] ) {
          this.vehiculos = resp['vehiculos'];
          resolve(true);
        }else {
          resolve(false);
        }
      });
    });

  }



  subirArchivos( img: string, nombreFoto: string) {

    const options: FileUploadOptions = {

      fileKey: 'imagen',
      headers: {
        'x-token': this.usuarioService.token
      }
    };

    const fileTransfer: FileTransferObject = this.fileTransfer.create();

    fileTransfer.upload(img, `${ URL }/conductor/upload/${ nombreFoto }`, options)
    .then( data => {
      console.log(data);
    }).catch( err => {
      console.error('error al cargar', err);
    });

  }


  crearConductor(conductor){

    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    return new Promise(async resolve => {

    await this.http.post(`${ URL }/conductor/create`, conductor, { headers } )
        .subscribe( async resp => {
          console.log(resp);

          if ( resp['ok'] ) {
            await this.storage.set('tipoUsuario', 'conductor');
            resolve(true);
          } else {
            resolve(false);
          }

        });


    });

  }


  generarOferta(oferta: OfertaConductor){

    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });


    // tslint:disable-next-line: triple-equals

    return new Promise(async resolve => {

    await this.http.post(`${ URL }/conductor/oferta-conductor`, oferta, { headers } )
        .subscribe( async resp => {
          console.log(resp);

          if ( resp['ok'] ) {
            resolve(true);
          } else {
            resolve(false);
          }

        });


    });
    
  }


  // Buscar pasajeros que hayan aceptado la oferta
  buscarOfertasAceptadas(idOferta){
    return  this.http.get<any>(`${ URL }/conductor/buscar-poc/${ idOferta }`);

  }


  // Terminar Oferta
  terminarOferta(idOferta){

    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });


    // tslint:disable-next-line: triple-equals

    return new Promise(async resolve => {

    await this.http.post(`${ URL }/conductor/terminar-oferta/${ idOferta }`, '',  { headers } )
        .subscribe( async resp => {
          console.log(resp);

          if ( resp['ok'] ) {
            resolve(true);
          } else {
            resolve(false);
          }

        });


    });

  }

  // Rechazar Oferta
  actualizarPasajeroOfertaConductor(idOferta, datos){

    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });


    // tslint:disable-next-line: triple-equals

    return new Promise(async resolve => {

    await this.http.post(`${ URL }/conductor/update-poc/${ idOferta }`, datos,  { headers } )
        .subscribe( async resp => {
          console.log(resp);

          if ( resp['ok'] ) {
            resolve(true);
          } else {
            resolve(false);
          }

        });


    });

  }


    // Buscar las ofertas de los pasajeros
    ofertasPasajeros(esInterUrbano, idUsuario, ciudad1, ciudad2, pull: boolean = false){

      
      if (ciudad1 == null || ciudad2 == null){
        
        if ( pull ){
          this.pagina = 0;
        }
    
        this.pagina ++;
  
        return this.http.get<any>(`${ URL }/conductor/buscarOfertasPasajeros/${ esInterUrbano }/?idConductor=${ idUsuario }&pagina=${ this.pagina }`);
  
      }else{

      if ( pull ){
        this.pagina = 0;
      }
  
      this.pagina ++;

      return this.http.get<any>(`${ URL }/conductor/buscarOfertasPasajeros/${ esInterUrbano }/?idConductor=${ idUsuario }&ciudad1=${ ciudad1 }&ciudad2=${ ciudad2 }&pagina=${ this.pagina }`);
    }
    }


    // Aceptar la oferta de un pasajero
    aceptarOferta(idOferta){

      const headers = new HttpHeaders({
        'x-token': this.usuarioService.token
      });
    
      return this.http.post<any>(`${ URL }/conductor/conductor-oferta-pasajero`, idOferta, { headers } );
    
     }

     // Buscar las ofertas de los aceptadas
  ofertasAceptadas(idUsuario, pull: boolean = false){

    if ( pull ){
      this.pagina = 0;
    }

    this.pagina ++;
    return this.http.get<any>(`${ URL }/conductor/buscarOfertasAceptadas/${ idUsuario }/?pagina=${ this.pagina }`);

  }

   // Buscar las ofertas del conductor

   buscarOfertasConductor(idUsuario: string, pull: boolean = false){

    if ( pull ){
      this.pagina = 0;
    }

    this.pagina ++;
    return  this.http.get<any>(`${ URL }/conductor/buscar-ofertas-conductor/${ idUsuario }/?pagina=${ this.pagina }`);

  }


  // Calificar
  calificar(calificacion){

    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });
  
    return this.http.post<any>(`${ URL }/conductor/calificar`, calificacion, { headers } );
  
   }




}
