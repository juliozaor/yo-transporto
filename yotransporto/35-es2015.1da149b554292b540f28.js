(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{qs0g:function(o,t,i){"use strict";i.r(t),i.d(t,"VerOfertaPasajeroPageModule",(function(){return k}));var c=i("ofXK"),e=i("3Pt+"),a=i("TEn/"),n=i("tyNb"),r=i("mrSG"),b=i("ZJfK"),s=i("fXoL"),l=i("on2l"),f=i("H+l1");function u(o,t){1&o&&(s.Nb(0,"h4"),s.mc(1,"Ciudad"),s.Mb())}function d(o,t){1&o&&(s.Nb(0,"h4"),s.mc(1,"Interurbano"),s.Mb())}function h(o,t){1&o&&(s.Nb(0,"h4"),s.mc(1,"Domicilio"),s.Mb())}function M(o,t){1&o&&(s.Nb(0,"h4"),s.mc(1,"Mercancia"),s.Mb())}function N(o,t){if(1&o&&(s.Nb(0,"ion-row"),s.Nb(1,"ion-col",7),s.Nb(2,"ion-text",6),s.Nb(3,"h4"),s.mc(4,"Recoger en el horario: "),s.Mb(),s.Mb(),s.Mb(),s.Nb(5,"ion-col",7),s.Nb(6,"ion-text"),s.Nb(7,"h4"),s.mc(8),s.Mb(),s.Mb(),s.Mb(),s.Mb()),2&o){const o=s.Xb(2);s.Ab(8),s.pc("",o.oferta.horaInicial," - ",o.oferta.horaFinal,"")}}function p(o,t){if(1&o&&(s.Nb(0,"ion-row"),s.Nb(1,"ion-col",7),s.Nb(2,"ion-text",6),s.Nb(3,"h4"),s.mc(4,"Fecha: "),s.Mb(),s.Mb(),s.Mb(),s.Nb(5,"ion-col",7),s.Nb(6,"ion-text"),s.Nb(7,"h4"),s.mc(8),s.Mb(),s.Mb(),s.Mb(),s.Mb()),2&o){const o=s.Xb(2);s.Ab(8),s.nc(o.oferta.fecha)}}function m(o,t){1&o&&(s.Nb(0,"p"),s.mc(1,"Aire acondicionado"),s.Mb())}function g(o,t){1&o&&(s.Nb(0,"p"),s.mc(1,"Musica"),s.Mb())}function O(o,t){1&o&&(s.Nb(0,"p"),s.mc(1,"Asientos para Bebe"),s.Mb())}function v(o,t){1&o&&(s.Nb(0,"p"),s.mc(1,"Maletero"),s.Mb())}function A(o,t){if(1&o&&(s.Nb(0,"ion-row"),s.Nb(1,"ion-col",7),s.Nb(2,"ion-text",6),s.Nb(3,"h3"),s.mc(4,"Requiero: "),s.Mb(),s.Mb(),s.Mb(),s.Nb(5,"ion-col",7),s.Nb(6,"ion-text"),s.lc(7,m,2,0,"p",8),s.lc(8,g,2,0,"p",8),s.lc(9,O,2,0,"p",8),s.lc(10,v,2,0,"p",8),s.Mb(),s.Mb(),s.Mb()),2&o){const o=s.Xb(2);s.Ab(7),s.cc("ngIf",0!=o.oferta.aire),s.Ab(1),s.cc("ngIf",0!=o.oferta.musica),s.Ab(1),s.cc("ngIf",0!=o.oferta.sientos),s.Ab(1),s.cc("ngIf",0!=o.oferta.maleta)}}function C(o,t){if(1&o&&(s.Nb(0,"ion-row"),s.Nb(1,"ion-col",7),s.Nb(2,"ion-text",6),s.Nb(3,"h3"),s.mc(4,"Comentarios: "),s.Mb(),s.Mb(),s.Mb(),s.Nb(5,"ion-col",7),s.Nb(6,"ion-text"),s.Nb(7,"p"),s.mc(8),s.Mb(),s.Mb(),s.Mb(),s.Mb()),2&o){const o=s.Xb(2);s.Ab(8),s.nc(o.oferta.comentarios)}}function w(o,t){if(1&o){const o=s.Ob();s.Nb(0,"ion-col",13),s.Nb(1,"ion-chip",15),s.Vb("click",(function(){s.ic(o);const t=s.Xb().$implicit;return s.Xb(2).chatear(t)})),s.Nb(2,"ion-label"),s.mc(3,"Chat"),s.Mb(),s.Mb(),s.Mb()}}function I(o,t){if(1&o){const o=s.Ob();s.Nb(0,"ion-col",13),s.Nb(1,"ion-chip",15),s.Vb("click",(function(){s.ic(o);const t=s.Xb().$implicit;return s.Xb(2).aceptar(t.codOfertaConductor,t.idSignal)})),s.Nb(2,"ion-label"),s.mc(3,"Aceptar"),s.Mb(),s.Mb(),s.Mb()}}function x(o,t){if(1&o){const o=s.Ob();s.Nb(0,"ion-col",13),s.Nb(1,"ion-chip",16),s.Vb("click",(function(){s.ic(o);const t=s.Xb(),i=t.$implicit,c=t.index;return s.Xb(2).rechazar(i.codOfertaConductor,c)})),s.Nb(2,"ion-label"),s.mc(3,"Rechazar"),s.Mb(),s.Mb(),s.Mb()}}function j(o,t){if(1&o&&(s.Nb(0,"ion-row",12),s.Nb(1,"ion-col",13),s.Nb(2,"ion-label"),s.Nb(3,"p"),s.mc(4),s.Mb(),s.Nb(5,"p"),s.mc(6),s.Mb(),s.Mb(),s.Mb(),s.lc(7,w,4,0,"ion-col",14),s.lc(8,I,4,0,"ion-col",14),s.lc(9,x,4,0,"ion-col",14),s.Mb()),2&o){const o=t.$implicit,i=s.Xb(2);s.Ab(4),s.nc(o.nombre),s.Ab(2),s.nc(o.valor),s.Ab(1),s.cc("ngIf",1==i.habilitarChat),s.Ab(1),s.cc("ngIf",0==i.habilitarChat),s.Ab(1),s.cc("ngIf",1==i.habilitarRechazar)}}function _(o,t){if(1&o){const o=s.Ob();s.Nb(0,"ion-grid",4),s.Nb(1,"ion-row"),s.Nb(2,"ion-col",5),s.Nb(3,"ion-text"),s.Nb(4,"h3"),s.Nb(5,"ion-label",6),s.mc(6,"Origen:"),s.Mb(),s.mc(7),s.Mb(),s.Nb(8,"h3"),s.Nb(9,"ion-label",6),s.mc(10,"Destino:"),s.Mb(),s.mc(11),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Nb(12,"ion-row"),s.Nb(13,"ion-col",7),s.Nb(14,"ion-text",6),s.Nb(15,"h3"),s.mc(16,"Tipo de servicio: "),s.Mb(),s.Mb(),s.Mb(),s.Nb(17,"ion-col",7),s.Nb(18,"ion-text"),s.lc(19,u,2,0,"h4",8),s.lc(20,d,2,0,"h4",8),s.lc(21,h,2,0,"h4",8),s.lc(22,M,2,0,"h4",8),s.Mb(),s.Mb(),s.Mb(),s.lc(23,N,9,2,"ion-row",8),s.lc(24,p,9,1,"ion-row",8),s.lc(25,A,11,4,"ion-row",8),s.lc(26,C,9,1,"ion-row",8),s.Nb(27,"ion-row"),s.Nb(28,"ion-col",9),s.Nb(29,"ion-text",6),s.Nb(30,"h1"),s.mc(31),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Nb(32,"ion-grid"),s.Nb(33,"ion-row"),s.Nb(34,"ion-col",5),s.Nb(35,"ion-label"),s.Nb(36,"h1"),s.mc(37,"Conductores que aceptaron la oferta"),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.lc(38,j,10,5,"ion-row",10),s.Mb(),s.Nb(39,"ion-row"),s.Nb(40,"ion-col",5),s.Nb(41,"ion-button",11),s.Vb("click",(function(){return s.ic(o),s.Xb().finalizarOferta()})),s.mc(42," Finalizar Oferta "),s.Mb(),s.Mb(),s.Mb(),s.Mb()}if(2&o){const o=s.Xb();s.Ab(7),s.oc(" ",o.oferta.origen,""),s.Ab(4),s.oc(" ",o.oferta.destino,""),s.Ab(8),s.cc("ngIf",1==o.oferta.codTipoServicio),s.Ab(1),s.cc("ngIf",2==o.oferta.codTipoServicio),s.Ab(1),s.cc("ngIf",3==o.oferta.codTipoServicio),s.Ab(1),s.cc("ngIf",4==o.oferta.codTipoServicio),s.Ab(1),s.cc("ngIf",null!=o.oferta.horaInicial||null!=o.oferta.horaFinal),s.Ab(1),s.cc("ngIf",null!=o.oferta.fecha),s.Ab(1),s.cc("ngIf",0!=o.oferta.aire||0!=o.oferta.musica||0!=o.oferta.sientos||0!=o.oferta.maleta),s.Ab(1),s.cc("ngIf",null!=o.oferta.comentarios),s.Ab(5),s.oc("$",o.oferta.tarifa,""),s.Ab(7),s.cc("ngForOf",o.conductores)}}const y=[{path:"",component:(()=>{class o{constructor(o,t,i,c,e){this.usuarioService=o,this.modalCtrl=t,this.alertController=i,this.navCtrl=c,this.push=e,this.habilitarChat=!1,this.habilitarBoton=!0,this.habilitarRechazar=!0,this.ofertasAceptadas=[],this.conductores=[]}ngOnInit(){this.cargarDatos()}cargarDatos(){return Object(r.__awaiter)(this,void 0,void 0,(function*(){this.oferta=yield this.usuarioService.ofertaPasajero,console.log(this.oferta),this.usuarioService.buscarOfertasAceptadas(this.oferta.idOfertaPasajero).subscribe(o=>{this.ofertasAceptadas=o.ofertas,this.ofertasAceptadas.forEach(o=>{this.usuarioService.datosUsuario(o.codConductor).subscribe(t=>{const i={nombre:t.usuario.nombre,codOfertaConductor:o.idConductorOfertaPasajero,valor:o.valor,aceptada:o.aceptada,idSignal:t.usuario.idSignal};this.habilitarChat=o.aceptada,this.conductores.push(i)})})})}))}chatear(o){return Object(r.__awaiter)(this,void 0,void 0,(function*(){const t=yield this.modalCtrl.create({component:b.a,componentProps:{idOferta:o.codOfertaConductor,nombre:o.nombre}});yield t.present()}))}aceptar(o,t){return Object(r.__awaiter)(this,void 0,void 0,(function*(){const i=yield this.alertController.create({message:"Esta seguro que desea aceptar este conductor?",buttons:[{text:"Cancelar",role:"cancel"},{text:"Aceptar",handler:i=>Object(r.__awaiter)(this,void 0,void 0,(function*(){if(this.usuarioService.actualizarConductorOfertaPasajero(o,{estado:!1,aceptada:!0})){this.habilitarChat=!0,this.habilitarRechazar=!1;const o={oferta:this.oferta,lugar:"aceptar conductor"},i=JSON.stringify({mensaje:"El conductor aceptado su oferta",titulo:"Oferta Aceptada",idSignal:t}),c=JSON.stringify(o);console.log(c),this.push.enviarNotificacion(i,c).subscribe(o=>{console.log(o)})}}))}]});yield i.present()}))}rechazar(o,t){return Object(r.__awaiter)(this,void 0,void 0,(function*(){const i=yield this.alertController.create({message:"Esta seguro que desea rechazar este conductor?",buttons:[{text:"Cancelar",role:"cancel"},{text:"Aceptar",handler:i=>Object(r.__awaiter)(this,void 0,void 0,(function*(){this.usuarioService.actualizarConductorOfertaPasajero(o,{estado:!0,aceptada:!1})&&this.ofertasAceptadas.splice(t,1)}))}]});yield i.present()}))}finalizarOferta(){return Object(r.__awaiter)(this,void 0,void 0,(function*(){const o=yield this.alertController.create({message:"Esta seguro que desea terminar esta oferta?",buttons:[{text:"Cancelar",role:"cancel"},{text:"Aceptar",handler:o=>Object(r.__awaiter)(this,void 0,void 0,(function*(){this.usuarioService.terminarOferta(this.oferta.idOfertaPasajero)&&this.navCtrl.navigateRoot("/principal",{animated:!0})}))}]});yield o.present()}))}}return o.\u0275fac=function(t){return new(t||o)(s.Kb(l.a),s.Kb(a.bb),s.Kb(a.b),s.Kb(a.cb),s.Kb(f.a))},o.\u0275cmp=s.Eb({type:o,selectors:[["app-ver-oferta-pasajero"]],decls:8,vars:1,consts:[["color","#f77708"],["slot","start"],["defaultHref","/ofertas-pasajero"],["fixed","",4,"ngIf"],["fixed",""],["size","12"],["color","primary"],["size","6"],[4,"ngIf"],["size","12",1,"aling-center"],["class","bgcolor border",4,"ngFor","ngForOf"],["fill","outline","expand","full","shape","round",3,"click"],[1,"bgcolor","border"],["size","4"],["size","4",4,"ngIf"],["color","dark","mode","ios","outline","false",1,"color-blue",3,"click"],["color","dark","mode","ios","outline","false",1,"color-red",3,"click"]],template:function(o,t){1&o&&(s.Nb(0,"ion-header"),s.Nb(1,"ion-toolbar",0),s.Nb(2,"ion-buttons",1),s.Lb(3,"ion-back-button",2),s.Mb(),s.Nb(4,"ion-title"),s.mc(5,"Oferta Pasajero"),s.Mb(),s.Mb(),s.Mb(),s.Nb(6,"ion-content"),s.lc(7,_,43,12,"ion-grid",3),s.Mb()),2&o&&(s.Ab(7),s.cc("ngIf",t.oferta))},directives:[a.q,a.X,a.i,a.f,a.g,a.W,a.n,c.l,a.p,a.L,a.m,a.V,a.A,c.k,a.h,a.l],styles:[".bgcolor[_ngcontent-%COMP%]{background:#ccd1e0}.border[_ngcontent-%COMP%]{border:1px solid #4d4f50}ion-chip[_ngcontent-%COMP%]{background:#795df1}.color-blue[_ngcontent-%COMP%]{background:rgba(61,250,77,.69)}.color-red[_ngcontent-%COMP%]{background:rgba(255,4,4,.55)}"]}),o})()}];let S=(()=>{class o{}return o.\u0275mod=s.Ib({type:o}),o.\u0275inj=s.Hb({factory:function(t){return new(t||o)},imports:[[n.i.forChild(y)],n.i]}),o})(),k=(()=>{class o{}return o.\u0275mod=s.Ib({type:o}),o.\u0275inj=s.Hb({factory:function(t){return new(t||o)},imports:[[c.c,e.a,a.Y,S]]}),o})()}}]);