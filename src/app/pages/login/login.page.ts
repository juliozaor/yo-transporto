import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController, ModalController, IonInput, IonCheckbox } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { ModalTerminosPage } from '../modal-terminos/modal-terminos.page';
import { Usuario } from '../../interfaces/interfaces';
import { PushService } from '../../services/push.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal') slides: IonSlides;
  @ViewChild('repassword') repassword: IonInput;
  @ViewChild('terminos') terminos: IonCheckbox;

  usuario: Usuario = {};
  idSignal: string;

  loginUser = {
    email: '',
    password: ''
  };

   registro: Usuario = {
    cedula: '',
    nombre: '',
    email: '',
    password: '',
    telefono: '',
    foto: '',
    idSignal: this.idSignal
  };


  constructor( private usuarioService: UsuarioService,
               private navCtrl: NavController ,
               private uiService: UiServiceService,
               private modalCtrl: ModalController,
               private push: PushService ) { }

  ngOnInit() {
   // this.slides.lockSwipes( true );
   this.idSignal = this.push.userId;
   this.registro.idSignal = this.idSignal;

  }

  ionViewDidEnter() {
    this.slides.lockSwipes(true);
  }

  async login( fLogin: NgForm ) {

    if ( fLogin.invalid ) { return; }

    const valido = await this.usuarioService.login( this.loginUser.email, this.loginUser.password );

    if ( valido ) {
      // navegar al tabs
      //this.ususario = this.usuarioService.getUsuario();
      //console.log(this.ususario);
      //this.navCtrl.navigateRoot( '/principal', { animated: true } );
      location.href = '/principal';


    } else {
      // mostrar alerta de usuario y contraseña no correctos
      this.uiService.alertaInformativa('Usuario y contraseña no son correctos.');
    }


  }

  loginGoogle(){
    console.log('registrar google');
  }

  async registroUsuario( fRegistro: NgForm ) {

    if ( fRegistro.invalid ) { return; }


    const password = fRegistro.form.controls.password.value;


    // tslint:disable-next-line: triple-equals
    if ( password == this.repassword.value){

      if ( this.terminos.checked){
        const valido = await this.usuarioService.registro( this.registro );

        if ( valido ) {
          // navegar al tabs
           //this.navCtrl.navigateRoot( '/principal', { animated: true } );

          location.href = 'principal';

        } else {
          // mostrar alerta de usuario y contraseña no correctos
          this.uiService.alertaInformativa('Ese correo electrónico ya existe.');
        }

      }else{
        this.uiService.alertaInformativa('Debe aceptar los terminos y condiciones para poder continuar.');
      }
    }else{
      this.uiService.alertaInformativa('Las contraseñas no coinciden.');
    }


  }






  /* mostrarRegistroSelect() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  } */

  mostrarLogin() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }

  /* mostrarRegistroConductor() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(2);
    this.slides.lockSwipes(true);
  } */

  mostrarRegistroPasajero() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(3);
    this.slides.lockSwipes(true);
  }


  async abrirTerminos() {
    const modal = await this.modalCtrl.create({
      component: ModalTerminosPage,
      /* componentProps: {
        nombre: 'Julio',
        pais: 'Colombia'
      } */
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
    console.log(data);
    }

}

