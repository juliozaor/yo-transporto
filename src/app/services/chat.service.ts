import { Injectable, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { IntMensaje, Usuario } from '../interfaces/interfaces';
import { UsuarioService } from './usuario.service';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<IntMensaje>;

  public chats: IntMensaje[] = [];

  public usuario: Usuario;

  constructor(private afs: AngularFirestore,
              private userService: UsuarioService) { }

  // Se almacena el ide del chat con el mismo id de la oferta
  cargarMensajes(idOferta){

    this.itemsCollection = this.afs.collection<IntMensaje>(idOferta, ref => ref.orderBy('fecha', 'desc')
                                                                              .limit(5));
    this.itemsCollection.valueChanges().subscribe((mensajes: IntMensaje[]) => {

           this.chats = [];

           for (const mensaje of mensajes) {
             this.chats.unshift(mensaje);
           }

           return this.chats;

           // this.chats = mensaje;
    });

  }

  agregarMensaje( texto: string){
    this.usuario = this.userService.getUsuario();

    const mensaje: IntMensaje = {
      nombre: this.usuario.nombre,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: this.usuario.idUsuario
    };

    return this.itemsCollection.add( mensaje );
  }
}
