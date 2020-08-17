import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OfertaConductorCompleta, Usuario } from '../../interfaces/interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-oferta',
  templateUrl: './ver-oferta.page.html',
  styleUrls: ['./ver-oferta.page.scss'],
})
export class VerOfertaPage implements OnInit {

  //idTipoOferta: string;
  desde: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

 // this.idTipoOferta = this.activatedRoute.snapshot.paramMap.get("idTipoOferta");
  this.desde = this.activatedRoute.snapshot.paramMap.get("from");


  }



}
