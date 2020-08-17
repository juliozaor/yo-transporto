import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente, IntOfertaUsuario } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getMenuOpts(){
    return this.http.get<Componente[]>('assets/data/menu.json');
  }
  getMenuOpts2(){
    return this.http.get<Componente[]>('assets/data/menu2.json');
  }

  getListaOpts(){
    return this.http.get<IntOfertaUsuario[]>('assets/data/listas.json');
  }
}
