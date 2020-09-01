import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonSlides, ActionSheetController, NavController, IonCheckbox, IonContent } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { UbicacionService } from '../../services/ubicacion.service';
import { UiServiceService } from '../../services/ui-service.service';
import { ConductorService } from '../../services/conductor.service';
import { async } from '@angular/core/testing';
import { VehiculoService } from '../../services/vehiculo.service';
import { Conductor, Vehiculo } from 'src/app/interfaces/interfaces';
import { PropietarioService } from '../../services/propietario.service';
import { stringify } from 'querystring';
import { HttpClient } from '@angular/common/http';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';

declare var window: any;
@Component({
  selector: 'app-registro-conductor',
  templateUrl: './registro-conductor.page.html',
  styleUrls: ['./registro-conductor.page.scss'],
})
export class RegistroConductorPage implements OnInit {

sliderConfig = {
  autoHeight: true
};

titulo: string;
tempImagenes: string[] = []; // Imagenes del vehiculo
imgVehiculo: any[] = [];

tempImgLicencia: string[] = [];
imgLicencia: any[] = [];

tempImgPropiedad: string[] = [];
imgPropiedad: any[] = [];

tempImgSoat: string[] = [];
imgSoat: any[] = [];

tempImgSimit: string[] = [];
imgSimit: any[] = [];

@ViewChild('slides') slides: IonSlides;
@ViewChild('terminos') chkTerminos: IonCheckbox;
@ViewChild('content') content: IonContent;

// Dato extraido del mapa
ciudad: string;
direccion: string;

// Variables seleccionadas por el usuario
tipoVehiculo: string;
generarGanancia: string;

NLicencia: string;  // numero de la licencia
NSoat: string;
NTPropiedad: string;
placa: string;
modelo: string;

desplazamientoGR = 'todas';
desplazamientoOP = 'ciudad';
ciudad1 = '';
ciudad2 = '';




@ViewChild('pwaphoto') pwaphoto: ElementRef;  //insertar imagenes 
imgURI: string = null;




  constructor(private actionSheetCtrl: ActionSheetController,
              private camera: Camera,
              private navCtrl: NavController,
              private ubicacionService: UbicacionService,
              private ui: UiServiceService,
              private conductorService: ConductorService,
              private vehiculoService: VehiculoService,
              private propietarioService: PropietarioService) { }

  ngOnInit() {
    this.titulo = 'Registrate como conductor';
    this.ciudad = this.ubicacionService.getCiudad();
    console.log(this.ciudad);
  }

  ionViewDidEnter() {
    this.slides.lockSwipes(true);
  }

  principal(){
    this.navCtrl.navigateRoot( '/principal', { animated: true } );
  }


  continuar(page: string){

    // tslint:disable-next-line: triple-equals
    if ( page == '1'){

    this.titulo = 'Hola AMIGO permitenos conocerte';

    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);

    this.content.scrollToTop();


    // tslint:disable-next-line: triple-equals
    } else if (page == '2') {

      this.titulo = 'Te damos la Bienvenida';
      this.slides.lockSwipes(false);
      this.slides.slideTo(3);
      this.slides.lockSwipes(true);
      this.content.scrollToTop();
    }

  }

  volver(page: string){

    // tslint:disable-next-line: triple-equals
    if ( page == '0'){

      this.titulo = 'Registrate como conductor';
  
      this.slides.lockSwipes(false);
      this.slides.slideTo(0);
      this.slides.lockSwipes(true);
      this.content.scrollToTop();
  
      // tslint:disable-next-line: triple-equals
      } else if (page == '1') {
  
        this.titulo = 'Hola AMIGO permitenos conocerte';

        this.slides.lockSwipes(false);
        this.slides.slideTo(1);
        this.slides.lockSwipes(true);
        this.content.scrollToTop();

      // tslint:disable-next-line: triple-equals
      }else if (page == '2') {
  
        this.titulo = 'Como quieres generar ganancias en Yo transporto';

    
        this.slides.lockSwipes(false);
        this.slides.slideTo(2);
        this.slides.lockSwipes(true);
        this.content.scrollToTop();

      }

  }

  // tipo de vehiculo 
  tipoV(tipo: string){
    this.titulo = 'Como quieres generar ganancias en Yo transporto';

    this.tipoVehiculo = tipo;

    this.slides.lockSwipes(false);
    this.slides.slideTo(2);
    this.slides.lockSwipes(true);
    this.content.scrollToTop();
 }

 generar(g: string){
      this.titulo = 'Te damos la Bienvenida';

      this.generarGanancia = g;

      if (g === 'a'){
          console.log('escogio: conducir su propio vehiculo');
      }else if (g === 'b'){
        console.log( 'escogio: quiero que alguien maneje mi vehiculo' );
      }else {
        console.log('escogio: quiero conducir');
      }

      this.slides.lockSwipes(false);
      this.slides.slideTo(3);
      this.slides.lockSwipes(true);
      this.content.scrollToTop();
 }

  acuerdosLegales(){
    this.titulo = 'Acuerdos Legales';
    this.slides.lockSwipes(false);
    this.slides.slideTo(4);
    this.slides.lockSwipes(true);
    this.content.scrollToTop();
  }

  fotosVehiculo(){
    this.titulo = 'Datos del Vehiculo';
    this.slides.lockSwipes(false);
    this.slides.slideTo(5);
    this.slides.lockSwipes(true);
    this.content.scrollToTop();
  }

  licencia(){
    this.titulo = 'Licencia del conductor';
    this.slides.lockSwipes(false);
    this.slides.slideTo(6);
    this.slides.lockSwipes(true);
    this.content.scrollToTop();
  }

  tarjetaPropiedad(){
    this.titulo = 'Tarjeta de propiedad';
    this.slides.lockSwipes(false);
    this.slides.slideTo(7);
    this.slides.lockSwipes(true);
    this.content.scrollToTop();
  }

  soat(){
    this.titulo = 'SOAT del Vehiculo';
    this.slides.lockSwipes(false);
    this.slides.slideTo(8);
    this.slides.lockSwipes(true);
    this.content.scrollToTop();
  }

  simit(){
    this.titulo = 'Simit';
    this.slides.lockSwipes(false);
    this.slides.slideTo(9);
    this.slides.lockSwipes(true);
    this.content.scrollToTop();
  }

  // Tomar fotos
  camara(page: string){
    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.CAMERA
    };

    this.procesarImagen(options, page);
  }

  // Buscar fotos en la libreria
  libreria(page: string){

    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };

    this.procesarImagen(options, page);
  }

// Procesar imagenes, guardarlas en el arreglo
  procesarImagen(options: CameraOptions, page: string){

    if (page === '1'){
      if (this.tempImagenes.length < 5){
        this.camera.getPicture(options).then((imageData) => {
          // imageData is either a base64 encoded string or a file URI
          // If it's base64 (DATA_URL):
         // let base64Image = 'data:image/jpeg;base64,' + imageData;

         const img = window.Ionic.WebView.convertFileSrc(imageData);
         this.tempImagenes.push(img);
         this.imgVehiculo.push(imageData);
         console.log(imageData);
       }, (err) => {
          // Handle error
         });
      }else{
        console.log('imagenes completas');
      }
    }else if (page === '2'){
      if (this.tempImgLicencia.length < 2){
        this.camera.getPicture(options).then((imageData) => {

         const img = window.Ionic.WebView.convertFileSrc(imageData);
         this.tempImgLicencia.push(img);
         this.imgLicencia.push(imageData);

       }, (err) => {
          // Handle error
         });
      }else{
        console.log('imagenes completas');
      }
    }else if (page === '3'){
      if (this.tempImgPropiedad.length < 2){
        this.camera.getPicture(options).then((imageData) => {

         const img = window.Ionic.WebView.convertFileSrc(imageData);
         this.tempImgPropiedad.push(img);
         this.imgPropiedad.push(imageData);

       }, (err) => {
          // Handle error
         });
      }else{
        console.log('imagenes completas');
      }
    }else if (page === '4'){
      if (this.tempImgSoat.length < 2){
        this.camera.getPicture(options).then((imageData) => {
         const img = window.Ionic.WebView.convertFileSrc(imageData);
         this.tempImgSoat.push(img);
         this.imgSoat.push(imageData);

       }, (err) => {
          // Handle error
         });
      }else{
        console.log('imagenes completas');
      }
    }else if (page === '5'){
      if (this.tempImgSimit.length < 2){
        this.camera.getPicture(options).then((imageData) => {
         const img = window.Ionic.WebView.convertFileSrc(imageData);
         
         this.tempImgSimit.push(img);
         this.imgSimit.push(imageData);
       }, (err) => {
          // Handle error
         });
      }else{
        console.log('imagenes completas');
      }
    }



  }

  // Borrar foto seleccionada
  async borrarFoto(image: string, page: string){

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Albums',
      backdropDismiss: false,
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        cssClass: 'rojo',
        handler: () => {
          if (page === '1'){
            console.log('vehiculo ', this.tempImagenes.length);
            const i = this.tempImagenes.indexOf( image );
            if ( i !== -1 ) {
                this.tempImagenes.splice( i, 1 );
                this.imgVehiculo.splice( i, 1 );
               // console.log('Delete clicked');
            }
          }else if (page === '2'){
            console.log('licencia ', this.tempImgLicencia.length);
            const i = this.tempImgLicencia.indexOf( image );
            if ( i !== -1 ) {
                this.tempImgLicencia.splice( i, 1 );
                this.imgLicencia.splice( i, 1 );
               // console.log('Delete clicked');
            }
          }else if (page === '3'){
            console.log('propiedad ', this.tempImgPropiedad.length);
            const i = this.tempImgPropiedad.indexOf( image );
            if ( i !== -1 ) {
                this.tempImgPropiedad.splice( i, 1 );
                this.imgPropiedad.splice( i, 1 );
               // console.log('Delete clicked');
            }
          }else if (page === '4'){
            console.log('soat ', this.tempImgSoat.length);
            const i = this.tempImgSoat.indexOf( image );
            if ( i !== -1 ) {
                this.tempImgSoat.splice( i, 1 );
                this.imgSoat.splice( i, 1 );
               // console.log('Delete clicked');
            }
          }
          else if (page === '5'){
            console.log('sinit ', this.tempImgSimit.length);
            const i = this.tempImgSimit.indexOf( image );
            if ( i !== -1 ) {
                this.tempImgSimit.splice( i, 1 );
                this.imgSimit.splice( i, 1 );
               // console.log('Delete clicked');
            }
          }

        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
         // console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

  }



 async inicio(){
  //  if (this.chkTerminos.checked){

      let conductor: any;

      // tslint:disable-next-line: triple-equals
      if (this.desplazamientoOP == 'interurbano'){

        // tslint:disable-next-line: triple-equals
        if ( this.desplazamientoGR == 'dos'){

            // tslint:disable-next-line: triple-equals
            if (this.ciudad1 == '' || this.ciudad2 == ''){
                this.ui.alertaInformativa('Es necesario colocar las ciudades en el paso anterior');
                return;
            }else{

                conductor = {
                  licencia: this.NLicencia,
                  direccion: this.direccion,
                  ciudad: this.ciudad,
                  codTipoVehiculo: this.tipoVehiculo,
                  estado: true,
                  esInterUrbano: true,
                  ciudadOrigen: this.ciudad1,
                  ciudadDestino: this.ciudad2
                };
                conductor.ciudadOrigen = conductor.ciudadOrigen.toUpperCase();
                conductor.ciudadDestino = conductor.ciudadDestino.toUpperCase();
          }
        }else {
          conductor = {
            licencia: this.NLicencia,
            direccion: this.direccion,
            ciudad: this.ciudad,
            codTipoVehiculo: this.tipoVehiculo,
            estado: true,
            esInterUrbano: true
          };
        }
      }else {
        conductor = {
          licencia: this.NLicencia,
          direccion: this.direccion,
          ciudad: this.ciudad,
          codTipoVehiculo: this.tipoVehiculo,
          estado: true
        };
      }


      const vehiculo: Vehiculo = {
        placa: this.placa,
        modelo: this.modelo,
        numeroSoat: this.NSoat,
        numeroTP: this.NTPropiedad,
        codTipoVehiculo: this.tipoVehiculo
      };

/* 
      // Subir fotos de la licencia
      const nombLicencia: string[] = ['foto1Licencia', 'foto2Licencia'];

      if (this.imgLicencia.length > 0){
        let i = 0;

        await this.imgLicencia.forEach(element => {

           this.conductorService.subirArchivos(element, nombLicencia[i]);

           i++;

        });
      } */

      // Subir fotos del vehiculo
      const nombVehiculo: string[] = ['foto1', 'foto2', 'foto3', 'foto4', 'foto5'];

      if (this.imgVehiculo.length > 0){
        let i = 0;

        await this.imgVehiculo.forEach(element => {

           console.log('entro1');
           this.vehiculoService.subirArchivos(element, nombVehiculo[i]);

           i++;

        });
      }

      // Subir fotos del SOAT
     /* const nombSoat: string[] = ['foto1Soat', 'foto2Soat'];

      if (this.imgSoat.length > 0){
        let i = 0;

        await this.imgSoat.forEach(element => {

           this.vehiculoService.subirArchivos(element, nombSoat[i]);

           i++;

        });
      }

       // Subir fotos del Tarjeta Propiedad
      const nombTP: string[] = ['foto1TP', 'foto2TP'];

      if (this.imgPropiedad.length > 0){
        let i = 0;

        await this.imgPropiedad.forEach(element => {

           this.vehiculoService.subirArchivos(element, nombTP[i]);

           i++;

        });
      }

      // Subir fotos del Simit
      const nombSimit: string[] = ['foto1Simit', 'foto2Simit'];

      if (this.imgSimit.length > 0){
        let i = 0;

        await this.imgSimit.forEach(element => {

           this.conductorService.subirArchivos(element, nombSimit[i]);

           i++;

        });
      }
 */


      // guardar dependiendo de la ganancia que se planea recibir
      // tslint:disable-next-line: triple-equals
     /*  if ( this.generarGanancia == 'c'){
      
          console.log('se guardara como solo conductor');

          const valido = await this.conductorService.crearConductor(conductor);

          if ( valido ) {
            //this.navCtrl.navigateRoot( '/conductor', { animated: true } );
             location.href = 'conductor';
             //console.log('Creado conductor');
          }else {
            // mostrar alerta de usuario y contraseña no correctos
            this.ui.alertaInformativa('El usuario no puede ser registrado como conductor.');
          }

      // tslint:disable-next-line: triple-equals
      }else if (this.generarGanancia == 'b'){

        console.log('se guardara como solo propietario');

        const valido = await this.propietarioService.crearPropietario(conductor);
        if ( valido ) {

          const validarVehiculo = await this.vehiculoService.registroVehiculo(vehiculo);
          if ( validarVehiculo ) {
            this.ui.alertaInformativa('Usted ha registrado su vehiculo correctamente');
            //this.navCtrl.navigateRoot( '/principal', { animated: true } );
            location.href = 'principal';
         }else {

           this.ui.alertaInformativa('El Vehiculo no pudo ser creado.');
         }
          //location.href = 'conductor';
       }else {

         this.ui.alertaInformativa('El propietario no pudo ser creado.');
       }
      // tslint:disable-next-line: triple-equals
      }else if (this.generarGanancia == 'a') {

        console.log('se guardara como conductor y propietario');

        const valido = await this.conductorService.crearConductor(conductor);

        if ( valido ) {

          const validoP = await this.propietarioService.crearPropietario(conductor);

          if ( validoP ) {
  
            const validarVehiculo = await this.vehiculoService.registroVehiculo(vehiculo);

            if ( validarVehiculo ) {

              const cV = await this.vehiculoService.registroConductorvehiculo();

              if ( cV ){
                this.ui.alertaInformativa('Usted se ha registrado correctamente');
                //this.navCtrl.navigateRoot( '/conductor', { animated: true } );
                location.href = 'conductor';
              }else {
  
                this.ui.alertaInformativa('no se pudo enlazar el vehiculo con el conductor.');
              }


           }else {
  
             this.ui.alertaInformativa('El Vehiculo no pudo ser creado.');
           }
            //location.href = 'conductor';
         }else {
  
           this.ui.alertaInformativa('El propietario no pudo ser creado.');
         }
            //console.log('Creado conductor');
        }else {
          // mostrar alerta de usuario y contraseña no correctos
          this.ui.alertaInformativa('El usuario no puede ser registrado como conductor.');
        }

      } */

      //this.navCtrl.navigateRoot( '/conductor', { animated: true } );
      //console.log('tipo: ', this.tipoVehiculo, ' categoria: ', this.generarGanancia, );

    /* }else{
      this.ui.alertaInformativa('Es necesario que acepte el "consentimiento legal" para poder continuar');
    } */

  }

  openPWAPhotoPicker() {
    if (this.pwaphoto == null) {
      return;
    }
    this.pwaphoto.nativeElement.click();
  }

  uploadPWA() {

    if (this.pwaphoto == null) {
      return;
    }

    const fileList: FileList = this.pwaphoto.nativeElement.files;
    if (fileList && fileList.length > 0) {

      this.firstFileToBase64(fileList[0]).then((result: string) => {

       /*  const imgDemo: File = fileList[0];
        console.log(imgDemo); */
        
        console.log(this.pwaphoto.nativeElement.files);
        this.tempImagenes.push(result);

        this.imgVehiculo.push(fileList[0]);

      }, (err: any) => {
        // Ignore error, do nothing
        this.tempImagenes = [];
      });
    }
  }

  private firstFileToBase64(fileImage: File): Promise<{}> {

    return new Promise((resolve, reject) => {
      const fileReader: FileReader = new FileReader();
      if (fileReader && fileImage != null) {
        fileReader.readAsDataURL(fileImage);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
          reject(error);
        };
      } else {
        reject(new Error('No file found'));
      }
    });
  }

  readUrl(event) {
    if (event.target.files && event.target.files[0]) {
         console.log(event.target.files[0]);
         const reader = new FileReader();
    
         reader.onload = ( event: any) => {

          console.log(event);
          

          this.tempImagenes.push(event.target.result);
           //this.url = event.target.result;
         }
    
         reader.readAsDataURL(event.target.files[0]);
    }

  }

}
