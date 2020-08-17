import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {

  constructor(private usuarioService: UsuarioService,
              private menuCtrl: MenuController ) { }

  ngOnInit() {
  }

  logout(){
    this.usuarioService.logout();
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

}
