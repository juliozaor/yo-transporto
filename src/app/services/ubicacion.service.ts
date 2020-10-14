import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  private ciudad: string;
  private direccion: string;

  ubicacion = new EventEmitter<any>();

  constructor(private http: HttpClient) { }

  // estos datos vienen del componente del mapa
  setCiudad(ciudad){
    this.ciudad = ciudad;
  }

  getCiudad(){
    return this.ciudad;
  }

  setDireccion(direccion){
    this.direccion = direccion;

    this.ubicacion.emit(this.direccion);

  }

  getDireccion(){
    return this.direccion;
  }

}
