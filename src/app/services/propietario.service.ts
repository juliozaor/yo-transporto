import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { async } from 'rxjs/internal/scheduler/async';
import { environment } from '../../environments/environment';
import { FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import { Conductor } from '../interfaces/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {

  constructor(private usuarioService: UsuarioService,
              private http: HttpClient) { }



  crearPropietario(conductor: Conductor){

    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    return new Promise(async resolve => {

       await this.http.post(`${ URL }/propietario/create`, conductor, { headers } )
          .subscribe(resp => {
            console.log(resp);

            if ( resp['ok'] ) {
              resolve(true);
            } else {
              resolve(false);
            }

          });


    });
  }
}
