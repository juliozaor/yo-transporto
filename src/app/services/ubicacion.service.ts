import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  private ciudad: string;
  private direccion: string;

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
  }

  getDireccion(){
    return this.direccion;
  }

}
