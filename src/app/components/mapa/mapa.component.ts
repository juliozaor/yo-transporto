import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UbicacionService } from '../../services/ubicacion.service';


declare var MapboxDirections: any;

declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {

  @Input() coords: string;

  @Input() origen: string;

  @Input() destino: string;

  //@Output() ciudad = new EventEmitter();

  @Input() lugar: string;

  @ViewChild('mapa') mapa: ElementRef;

  constructor(private http: HttpClient,
              private ubicacionService: UbicacionService) { }

  ngOnInit() {
    let latLng;
    let lat;
    let lng;

    let llOrigen;
    let latO;
    let lngO;

    let llDestino;
    let latD;
    let lngD;

    if (this.lugar === 'principal'){
      // coordenadas locales

      latLng = this.coords.split(',');
      lat = Number(latLng[0]);
      lng = Number(latLng[1]);
    }else if (this.lugar === 'conductor'){
      // coordenadas locales

      latLng = this.coords.split(',');
      lat = Number(latLng[0]);
      lng = Number(latLng[1]);
    }else if (this.lugar === 'oferta'){
      // coordenadas locales
       latLng = this.coords.split(',');
       lat = Number(latLng[0]);
       lng = Number(latLng[1]);

      // coordenadas oferta
       llOrigen = this.origen.split(',');
       latO = Number(llOrigen[0]);
       lngO = Number(llOrigen[1]);

      // coordenadas oferta
       llDestino = this.destino.split(',');
       latD = Number(llDestino[0]);
       lngD = Number(llDestino[1]);
  }


    mapboxgl.accessToken = 'pk.eyJ1IjoiemFvciIsImEiOiJja2Jqd3RodDAwdGlyMzBvZHUwM3N6NWtrIn0.AeiL56UBu8MiFEpuusJO6Q';

    // Obtener la ciudad actual
    this.http.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},
                  ${lat}.json?access_token=${mapboxgl.accessToken}`).subscribe((lugar:any) => {
     // console.log('Estoy en el lugar: ', lugar.features[1].text);
    this.ubicacionService.setCiudad(lugar.features[1].text);
    this.ubicacionService.setDireccion(lugar.features[0].text);
      //this.ciudad.emit(lugar.features[1].text);
    });



    if ( this.lugar === 'principal'){
      console.log('Mostrar principal');

      const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ lng, lat ],
      zoom: 15
      });

      const marker = new mapboxgl.Marker()
    .setLngLat([ lng, lat ])
    .addTo( map );

    }else if ( this.lugar === 'conductor'){
      console.log('Mostrar conductor');

      const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ lng, lat ],
      zoom: 15
      });

      const marker = new mapboxgl.Marker()
    .setLngLat([ lng, lat ])
    .addTo( map );

    }else if (this.lugar === 'oferta'){
          console.log('mostrar mapa oferta');

          const directions = new MapboxDirections({
            accessToken: mapboxgl.accessToken,
            unit: 'metric',
            profile: 'mapbox/cycling',
            interactive: false,
            controls: {
                inputs: false,
                instructions: false,
                profileSwitcher: false
            }
          });

          const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            zoom: 15
            });



          map.addControl(directions, 'top-left');

          map.on('load', function() {
            directions.setOrigin([ lngO, latO ]); // can be address in form setOrigin("12, Elm Street, NY")
            directions.setDestination([ lngD, latD ]); // can be address
        });
          const marker = new mapboxgl.Marker()
          .setLngLat([ lng, lat ])
          .addTo( map );
    }

    


  }

  /* ionViewWillEnter(){

   

  } */

  obtenerLugar(){
   

    console.log();



  }

}
