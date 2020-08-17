import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { IonContent } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from 'src/app/interfaces/interfaces';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit{

 mensaje: string;
 usuario: Usuario;

 @Input() idOferta: string;

 @ViewChild('content') content: IonContent;

  constructor(public cs: ChatService,
              private usuarioService: UsuarioService) {}

  ngOnInit(){
    
    this.cs.cargarMensajes(this.idOferta);


    this.usuarioService.getUsuarioToken().then((result) => {
      this.usuario = result;
    }).catch((err) => {
      console.log(err);
    });
   // this.elemento = document.getElementById('app-mensajes');
  }






  enviar_mensaje(){
     if (this.mensaje.length === 0){
        return;
     }

     this.cs.agregarMensaje (this.mensaje)
             .then( () => this.mensaje = '' )
             .catch( (err) => console.error( 'error al enviar: ', err) );

  }

}
