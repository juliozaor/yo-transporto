import { Injectable, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/interfaces';
import { BehaviorSubject, Observable } from 'rxjs';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class SesionService{

  user: Usuario;
  private userSubject = new BehaviorSubject(this.user);

  constructor(private userService: UsuarioService) {}


   getUserObservable(): Observable<Usuario> {
    this.user = this.userService.getUsuario();
    return this.userSubject.asObservable();
}

private setUser(user: Usuario) {
  this.user = user;
  // Refrescar user en los observables
  this.userSubject.next(this.user);

}


}
