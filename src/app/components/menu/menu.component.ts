import { Component, OnInit, Input, ViewChild, EventEmitter  } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/interfaces';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ConductorService } from '../../services/conductor.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: Observable<Componente[]>;

usuario: Usuario = {};

tipoUsuario: string;




@Input() ciudad: string;
 modoUsuario = 'Modo Conductor';

  constructor(private dataService: DataService,
              private usuarioService: UsuarioService,
              private navCtrl: NavController,
              private storage: Storage,
              private conductorService: ConductorService) {}

  ngOnInit() {

    // El storage me permite saber si el usuario esta como pasajero o conductor
    // y determinar que menú cargar
    this.storage.get('tipoUsuario').then( tipoUsuario => {

      this.tipoUsuario = tipoUsuario;
      // tslint:disable-next-line: triple-equals
      if ( tipoUsuario == 'pasajero'){
      this.componentes = this.dataService.getMenuOpts();
      this.modoUsuario = 'Modo Conductor';
      
    }else{
      this.componentes = this.dataService.getMenuOpts2();
      this.modoUsuario = 'Modo Pasajero';
      this.navCtrl.navigateRoot( '/conductor');
    }



      this.usuarioService.getUsuarioToken().then((result) => {
      this.usuario = result;
    }).catch((err) => {
      console.log(err);
    });

    });




    /* this.usuario = this.usuarioService.getUsuario();
    console.log(this.usuario); */

  }

  logout(){
    this.usuarioService.logout();
  }

  async cambiarModo(){

    // tslint:disable-next-line: triple-equals
    if ( this.tipoUsuario == 'pasajero' ){

      // Verificamos que el pasajero ya este registrado como conductor
      this.conductorService.buscarConductor(this.usuario.idUsuario).then(async resp => {
        // tslint:disable-next-line: triple-equals
        if ( resp == true){

          await this.storage.set('tipoUsuario', 'conductor');
          this.componentes = this.dataService.getMenuOpts2();
          this.modoUsuario = 'Modo Pasajero';
          this.tipoUsuario = 'conductor';
          this.navCtrl.navigateRoot( '/conductor', { animated: true } );
         // location.href = 'conductor';
          

        }else{
          this.navCtrl.navigateRoot( '/registroConductor', { animated: true } );
        }
      });



    }else{

      await this.storage.set('tipoUsuario', 'pasajero');
      this.modoUsuario = 'Modo Conductor';
      this.tipoUsuario = 'pasajero';
      //location.href = 'principal';
      this.componentes = this.dataService.getMenuOpts();
      this.navCtrl.navigateRoot( '/principal', { animated: true } );
      
    }





  }

  recargar(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }





}
