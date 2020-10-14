import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { OfertaConductor, OfertasArregloC, OfertaConductorCompleta, UsuarioConductor, Usuario, RespuestaOfertaConductor } from '../../interfaces/interfaces';
import { MenuController, NavController, IonRefresher } from '@ionic/angular';
import { ConductorService } from '../../services/conductor.service';
import { collectExternalReferences } from '@angular/compiler';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-ofertas-conductor',
  templateUrl: './ofertas-conductor.page.html',
  styleUrls: ['./ofertas-conductor.page.scss'],
})
export class OfertasConductorPage implements OnInit {

  idTipoOferta: string;
  idActual: string;

  ofertas: OfertaConductor;

  usuario: Usuario;

  ofertasCompletas: OfertaConductorCompleta[] = [];

  habilitado = true;

  @ViewChild('refresh') refresh: IonRefresher;

  constructor(private activatedRoute: ActivatedRoute,
              private usuarioService: UsuarioService,
              private navCtrl: NavController,
              private menuCtrl: MenuController) {
              }

  ngOnInit() {
    this.usuarioService.getUsuarioToken().then(async user => {

      this.usuario = await user;


      await this.cargarOfertas(false);



    });

  }



async cargarOfertas(event?, pull: boolean = false){

  this.idTipoOferta = await this.activatedRoute.snapshot.paramMap.get('idTipoOferta');

  // consultar las ofertas
  await this.usuarioService.ofertasConductor( this.idTipoOferta, pull).subscribe( resp => {


    this.ofertasCompletas.push(...resp.ofertas);

    console.log(this.ofertasCompletas);
    if ( event ){
      console.log('entro al si', resp.ofertas);
      event.target.complete();

      if (resp.ofertas.length === 0 ){
        
        this.habilitado = false;
      }


    }


});

  

}


  recargar(event?){
    this.ofertasCompletas = [];
    this.cargarOfertas(event, true);
    this.habilitado = true;

  }



  toggleMenu(){
    this.menuCtrl.toggle();
  }

  verOfertaConductor(oferta: OfertaConductorCompleta){

    this.usuarioService.ofertaConductor = oferta;

    this.navCtrl.navigateRoot( `/ver-oferta/1`, { animated: true } );

  }

  favorite(){

  }

  share(){

  }

  borrar(){

  }

  validar(fecha, com): boolean {

  let fechaActual = new Date();
  let fechaGuardada = new Date(fecha);

 

  fechaGuardada.setMinutes(fechaGuardada.getMinutes() + 120);



  console.log(com, ' : ', fechaActual.getTime(), ' , ', fechaGuardada.getTime());

  if (fechaActual.getTime() < fechaGuardada.getTime()){
    console.log('se va a mostrar');
    return true;
  }else{
    console.log('No se va a mostrar');
    return false;
  }


  }



}
