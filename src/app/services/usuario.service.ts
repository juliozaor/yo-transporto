import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { Usuario, OfertaConductor, RespuestaOfertaConductor, RespuestaUsuario, OfertaConductorCompleta } from '../interfaces/interfaces';
import { NavController } from '@ionic/angular';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

 token: string = null;
 private usuario: Usuario = {};

 ofertaConductor: OfertaConductorCompleta;
 ofertaPasajero: any;
 pagina = 0;


  constructor( private http: HttpClient,
               private storage: Storage,
               private navCtrl: NavController) { }


  login( email: string, password: string ) {

    const data = { email, password };

    return new Promise( resolve => {

      this.http.post(`${ URL }/user/login`, data )
        .subscribe( async resp => {
          if ( resp['ok'] ) {
            await this.guardarToken( resp['token'] );
            resolve(true);
          } else {
            this.token = null;
            this.storage.clear();
            resolve(false);
          }

        });

    });

  }




  logout() {
    this.token   = null;
    this.usuario = null;
    /* this.storage.remove('token').then(() => {
      this.navCtrl.navigateRoot('/login', { animated: true });
    }); */
    this.storage.clear();
    this.navCtrl.navigateRoot('/login', { animated: true });
  }

  registro( usuario: Usuario ) {

    return new Promise( resolve => {

      this.http.post(`${ URL }/user/create`, usuario )
          .subscribe( async resp => {
            console.log(resp);

            if ( resp['ok'] ) {
              await this.guardarToken( resp['token'] );
              resolve(true);
            } else {
              this.token = null;
              this.storage.clear();
              resolve(false);
            }

          });


    });


  }

/*   registroConductor( usuario: Usuario ) {

    return new Promise<boolean>( resolve => {

      this.http.post(`${ URL }/user/createConductor`, usuario )
          .subscribe( async resp => {
            //console.log(resp);

            if ( resp['ok'] ) {
              await this.guardarToken( resp['token'] );
              resolve(true);
            } else {
              this.token = null;
              this.storage.clear();
              resolve(false);
            }

          });


    });


  } */

  getUsuario() {
   // console.log(this.token);

    if ( !this.usuario.idUsuario ) {
      this.validaToken();
    }
    return { ...this.usuario };

  }



  async guardarToken( token: string ) {

    this.token = token;
    await this.storage.set('token', token);
    await this.storage.set('tipoUsuario', 'pasajero');

    await this.validaToken();


  }

  async cargarToken() {

    this.token = await this.storage.get('token') || null;

  }

  async getUsuarioToken(){
   await  this.validaToken();
   return this.usuario;

  }


  async validaToken(): Promise<boolean> {

    await this.cargarToken();

    if ( !this.token ) {
      this.navCtrl.navigateRoot('/login');
      return Promise.resolve(false);
    }


    return new Promise<boolean>( resolve => {

      const headers = new HttpHeaders({
        'x-token': this.token
      });

      this.http.get(`${ URL }/user/`, { headers })
        .subscribe( resp => {

          if ( resp['ok'] ) {
            this.usuario = resp['usuario'];
            resolve(true);
          } else {
            this.navCtrl.navigateRoot('/login');
            resolve(false);
          }

        });


    });

  }


  actualizarUsuario( usuario: Usuario ) {


    const headers = new HttpHeaders({
      'x-token': this.token
    });


    return new Promise<boolean>( resolve => {

      this.http.post(`${ URL }/user/update`, usuario, { headers })
        .subscribe( resp => {

          if ( resp['ok'] ) {
            this.guardarToken( resp['token'] );
            resolve(true);
          } else {
            resolve(false);
          }

        });

    });



  }

  // Buscar las ofertas de los conductores
  ofertasConductor(codTipoOferta: string, idPasajero, pull: boolean = false){
   
    if ( pull ){
      this.pagina = 0;
    }

    this.pagina ++;

    // tslint:disable-next-line: max-line-length
    return this.http.get<any>(`${ URL }/user/buscarOfertasConductor/${ codTipoOferta }/?idPasajero=${ idPasajero }&pagina=${ this.pagina }`);

  }


  // datos de un usuario
  datosUsuario(idUsuario: string){
    return this.http.get<any>(`${ URL }/user/buscar/${ idUsuario }`);
 }


 // Aceptar una oferta
 aceptarOferta(idOferta){

  const headers = new HttpHeaders({
    'x-token': this.token
  });

  return this.http.post<any>(`${ URL }/user/pasajero-oferta-conductor`, idOferta, { headers } );

 }



 // crear oferta pasajero
 crearOfertaPasajero(oferta){
    
  const headers = new HttpHeaders({
    'x-token': this.token
  });


  // tslint:disable-next-line: triple-equals

  return new Promise(async resolve => {

  await this.http.post(`${ URL }/user/oferta-pasajero`, oferta, { headers } )
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


  // Buscar las ofertas del pasajero

  buscarOfertasCPasajero(idUsuario: string, pull: boolean = false){
    if ( pull ){
      this.pagina = 0;
    }

    this.pagina ++;
    return  this.http.get<any>(`${ URL }/user/buscarOfertas/${ idUsuario }/?pagina=${ this.pagina }`);

  }

  // Buscar las ofertas  aceptadas
  ofertasAceptadas(idUsuario, pull: boolean = false){
    if ( pull ){
      this.pagina = 0;
    }

    this.pagina ++;
    return this.http.get<any>(`${ URL }/user/buscarOfertasAceptadas/${ idUsuario }/?pagina=${ this.pagina }`);

  }


  // Buscar conductores que hayan aceptado la oferta
  buscarOfertasAceptadas(idOferta){
    return  this.http.get<any>(`${ URL }/user/buscar-cop/${ idOferta }`);

  }

  // actualizar Oferta
  actualizarConductorOfertaPasajero(idOferta, datos){

    const headers = new HttpHeaders({
      'x-token': this.token
    });


    // tslint:disable-next-line: triple-equals

    return new Promise(async resolve => {

    await this.http.post(`${ URL }/user/update-cop/${ idOferta }`, datos,  { headers } )
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

   // Terminar Oferta
   terminarOferta(idOferta){

    const headers = new HttpHeaders({
      'x-token': this.token
    });


    // tslint:disable-next-line: triple-equals

    return new Promise(async resolve => {

    await this.http.post(`${ URL }/user/terminar-oferta/${ idOferta }`, '',  { headers } )
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


  // Calificar
  calificar(calificacion){

    const headers = new HttpHeaders({
      'x-token': this.token
    });
  
    return this.http.post<any>(`${ URL }/user/calificar`, calificacion, { headers } );
  
   }

}
