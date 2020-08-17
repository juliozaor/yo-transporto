import { Component, OnInit } from '@angular/core';
import { ConductorService } from '../../services/conductor.service';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario, Vehiculo, OfertaConductor } from '../../interfaces/interfaces';
import { VehiculoService } from '../../services/vehiculo.service';
import { NgForm } from '@angular/forms';
import { UiServiceService } from '../../services/ui-service.service';

@Component({
  selector: 'app-generar-oferta',
  templateUrl: './generar-oferta.page.html',
  styleUrls: ['./generar-oferta.page.scss'],
})
export class GenerarOfertaPage implements OnInit {


  usuario: Usuario;
  vehiculo: Vehiculo[] = [];
  vehiculos: any[] = [];
  conductor: any;

  oferta: OfertaConductor = {
    codVehiculo: '',
    comentarios: '',
    fecha_salida: '',
    hora_salida: '',
    origen: '',
    destino: '',
    tarifa: '',
    cantPasajeros: '',
    capacidadCarga: '',
    paqueteriaMensajeria: '',
    codTipoServicio: ''
  };



  constructor(private conductorService: ConductorService,
              private usuarioService: UsuarioService,
              private vehiculoService: VehiculoService,
              private uiService: UiServiceService) { }

  ngOnInit() {

    this.cargarVehiculos();

  }

  async cargarVehiculos(){
    this.vehiculoService.v = [];

    this.usuario = this.usuarioService.getUsuario();

    await this.conductorService.buscarVehiculosConductor(this.usuario.idUsuario);
    this.vehiculos = this.conductorService.vehiculos;


    this.vehiculos.forEach(element => {
        this.vehiculoService.buscarVehiculo(element.codVehiculo);
    });

    this.vehiculo = this.vehiculoService.v;

    this.conductorService.datosConductor(this.usuario.idUsuario).subscribe( resp => {
      this.conductor = resp.conductor;
      if (this.conductor.esInterUrbano === true){
          this.oferta.codTipoServicio = '2';
      }else{
        this.oferta.codTipoServicio = '3';
      }

    });

  }



  async generarOferta( fRegistro: NgForm ) {

    if ( fRegistro.invalid ) { return; }


   // const password = fRegistro.form.controls.password.value;
    const valido = await this.conductorService.generarOferta( this.oferta );

    if ( valido ) {

      this.uiService.alertaInformativa('Se ha registrado con exito la oferta');
    } else {

      this.uiService.alertaInformativa('La oferta no pudo ser registrada');
    }



  }



}
