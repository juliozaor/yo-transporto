import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Conductor } from '../../interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';
import { ConductorService } from '../../services/conductor.service';

@Component({
  selector: 'app-modal-calificacion',
  templateUrl: './modal-calificacion.page.html',
  styleUrls: ['./modal-calificacion.page.scss'],
})
export class ModalCalificacionPage implements OnInit {


  @Input() conductor;
  @Input() cod;

  puntualidad = [
    {
    value: 1,
    icon: 'star-outline'
  }, {
    value: 2,
    icon: 'star-outline'
  }, {
    value: 3,
    icon: 'star-outline'
  }, {
    value: 4,
    icon: 'star-outline'
  }, {
    value: 5,
    icon: 'star-outline'
  }
];

atencion = [
  {
  value: 1,
  icon: 'star-outline'
}, {
  value: 2,
  icon: 'star-outline'
}, {
  value: 3,
  icon: 'star-outline'
}, {
  value: 4,
  icon: 'star-outline'
}, {
  value: 5,
  icon: 'star-outline'
}
];

vehiculo = [
  {
  value: 1,
  icon: 'star-outline'
}, {
  value: 2,
  icon: 'star-outline'
}, {
  value: 3,
  icon: 'star-outline'
}, {
  value: 4,
  icon: 'star-outline'
}, {
  value: 5,
  icon: 'star-outline'
}
];

p = 1;
a = 1;
v = 1;



  constructor(private modalCtrl: ModalController,
              private usuarioService: UsuarioService,
              private conductorService: ConductorService) { }

  ngOnInit() {
  }

  salir() {
    this.modalCtrl.dismiss();
  }

  calificar(val, tipo){
    
    if (tipo === '1'){
      //this.nota(val, this.puntualidad);
      for (let i = 0; i < this.puntualidad.length; i++) {
        if (i < val){
          this.puntualidad[i].icon = 'star';
          this.p = val;
        }else {
          this.puntualidad[i].icon = 'star-outline';
        }

      }
    }else if ( tipo === '2'){
     // this.nota(val, this.atencion);
      for (let i = 0; i < this.atencion.length; i++) {
        if (i < val){
          this.atencion[i].icon = 'star';
          this.a = val;
        }else {
          this.atencion[i].icon = 'star-outline';
        }

      }
    }else {
      //this.nota(val, this.vehiculo);
      for (let i = 0; i < this.vehiculo.length; i++) {
        if (i < val){
          this.vehiculo[i].icon = 'star';
          this.v = val;
        }else {
          this.vehiculo[i].icon = 'star-outline';
        }

      }
    }
  }

  cerrar(){

    if (this.conductor){
      const nota = {
        puntualidad: this.p,
        atencion: this.a,
        vehiculo: this.v,
        codConductor: this.cod
      };

      this.conductorService.calificar(nota).subscribe( resp => {
        console.log(resp);
      });
    }else{
      const nota = {
        puntualidad: this.p,
        atencion: this.a,
        codPasajero: this.cod
      };

      this.usuarioService.calificar(nota).subscribe( resp => {
        console.log(resp);
      });
    }
    this.modalCtrl.dismiss();
  }

 /*  nota(val, c){
    let v = 5;
    for (let i = 0; i < c.length; i++) {
      if (i < val){
        c[i].icon = 'star';
        v = val;
      }else {
        c.icon = 'star-outline';
      }

    }
  } */

}
