import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { MenuController } from '@ionic/angular';
import { PushService } from '../../services/push.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {


  activadas = false;
  desactivadas = true;

  constructor(private usuarioService: UsuarioService,
              private menuCtrl: MenuController,
              private push: PushService ) { }

  ngOnInit() {
    this.push.configuracionInicial();
    this.activadas = this.push.getActivadas();
  }

  logout(){
    this.usuarioService.logout();
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

  btnDesactivadas(){
    this.push.activarNotificaciones();
  }

  btnActivadas(){
    console.log('Activadas');
  }


}
