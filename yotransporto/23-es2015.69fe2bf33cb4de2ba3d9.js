(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{TQtl:function(i,o,t){"use strict";t.r(o),t.d(o,"OfertasPasajeroPageModule",(function(){return w}));var e=t("ofXK"),n=t("3Pt+"),s=t("TEn/"),r=t("tyNb"),c=t("mrSG"),a=t("fXoL"),b=t("on2l");const l=["slides"],u=["lista"],f=["content"];function d(i,o){if(1&i){const i=a.Ob();a.Nb(0,"ion-list",null,16),a.Nb(2,"ion-item",19),a.Vb("click",(function(){a.ic(i);const t=o.$implicit;return a.Xb(2).verOfertaConductor(t)})),a.Nb(3,"ion-label"),a.Nb(4,"h1"),a.mc(5),a.Mb(),a.Nb(6,"p"),a.mc(7),a.Mb(),a.Nb(8,"p"),a.mc(9),a.Mb(),a.Nb(10,"p"),a.mc(11),a.Mb(),a.Nb(12,"p",20),a.mc(13),a.Mb(),a.Mb(),a.Mb(),a.Mb()}if(2&i){const i=o.$implicit;a.Ab(5),a.oc("Conductor: ",i.usuario.nombre,""),a.Ab(2),a.oc("Origen: ",i.oferta.origen,""),a.Ab(2),a.oc("Destino: ",i.oferta.destino,""),a.Ab(2),a.oc("Comentarios: ",i.oferta.comentarios,""),a.Ab(2),a.oc("precio: ",i.oferta.tarifa,"")}}function h(i,o){if(1&i&&(a.Nb(0,"ion-row"),a.Nb(1,"ion-col",15),a.lc(2,d,14,5,"ion-list",17),a.Mb(),a.Mb()),2&i){const i=a.Xb();a.Ab(2),a.cc("ngForOf",i.aceptadas)}}function p(i,o){1&i&&(a.Nb(0,"h1"),a.mc(1,"Ciudad"),a.Mb())}function g(i,o){1&i&&(a.Nb(0,"h1"),a.mc(1,"Interurbano"),a.Mb())}function m(i,o){1&i&&(a.Nb(0,"h1"),a.mc(1,"Envio"),a.Mb())}function M(i,o){1&i&&(a.Nb(0,"h1"),a.mc(1,"Mercancia"),a.Mb())}function N(i,o){if(1&i){const i=a.Ob();a.Nb(0,"ion-item-sliding"),a.Nb(1,"ion-item",21),a.Vb("click",(function(){a.ic(i);const t=o.$implicit;return a.Xb().verOfertaPasajero(t)})),a.Nb(2,"ion-label"),a.lc(3,p,2,0,"h1",14),a.lc(4,g,2,0,"h1",14),a.lc(5,m,2,0,"h1",14),a.lc(6,M,2,0,"h1",14),a.Nb(7,"p"),a.mc(8),a.Mb(),a.Mb(),a.Nb(9,"ion-label",22),a.mc(10),a.Mb(),a.Mb(),a.Mb()}if(2&i){const i=o.$implicit;a.Ab(3),a.cc("ngIf","1"==i.codTipoServicio),a.Ab(1),a.cc("ngIf","2"==i.codTipoServicio),a.Ab(1),a.cc("ngIf","3"==i.codTipoServicio),a.Ab(1),a.cc("ngIf","4"==i.codTipoServicio),a.Ab(2),a.oc("Comentarios: ",i.comentarios,""),a.Ab(2),a.oc(" precio: ",i.tarifa," ")}}const v=[{path:"",component:(()=>{class i{constructor(i,o,t){this.menuCtrl=i,this.usuarioService=o,this.navCtrl=t,this.ofertas=[],this.aceptadas=[],this.habilitado=!0}ngOnInit(){this.cargarOfertas(!1)}cargarOfertas(i,o=!1){return Object(c.__awaiter)(this,void 0,void 0,(function*(){this.usuarioService.getUsuarioToken().then(t=>{this.usuario=t,this.usuarioService.buscarOfertasCPasajero(this.usuario.idUsuario,o).subscribe(o=>{console.log(o.ofertas),this.ofertas.push(...o.ofertas),i&&(console.log("entro al si",o.ofertas.length),i.target.complete(),0===o.ofertas.length&&"ofertadas"===this.tipo&&(this.habilitado=!1))}),this.usuarioService.ofertasAceptadas(this.usuario.idUsuario,o).subscribe(o=>{this.aceptadas.push(...o.ofertas),i&&(console.log("entro al si",o.ofertas.length),i.target.complete(),0===o.ofertas.length&&"aceptadas"===this.tipo&&(this.habilitado=!1))})}).catch(i=>{console.log(i)})}))}recargar(i){this.aceptadas=[],this.ofertas=[],this.cargarOfertas(i,!0),this.habilitado=!0}toggleMenu(){this.menuCtrl.toggle()}segmentChanged(i){const o=i.detail.value;if(console.log(o),"aceptadas"===o)return this.slides.lockSwipes(!1),this.slides.slideTo(0),this.slides.lockSwipes(!0),this.content.scrollToTop(),void(this.tipo="aceptadas");this.slides.lockSwipes(!1),this.slides.slideTo(1),this.slides.lockSwipes(!0),this.content.scrollToTop(),this.tipo="ofertadas"}verOfertaConductor(i){this.usuarioService.ofertaConductor=i,this.navCtrl.navigateRoot("/ver-oferta/2",{animated:!0})}verOfertaPasajero(i){this.usuarioService.ofertaPasajero=i,this.navCtrl.navigateRoot("/ver-oferta-pasajero",{animated:!0})}}return i.\u0275fac=function(o){return new(o||i)(a.Kb(s.ab),a.Kb(b.a),a.Kb(s.cb))},i.\u0275cmp=a.Eb({type:i,selectors:[["app-ofertas-pasajero"]],viewQuery:function(i,o){var t;1&i&&(a.qc(l,!0),a.qc(u,!0),a.qc(f,!0)),2&i&&(a.gc(t=a.Wb())&&(o.slides=t.first),a.gc(t=a.Wb())&&(o.lista=t.first),a.gc(t=a.Wb())&&(o.content=t.first))},decls:32,vars:4,consts:[[1,"ion-no-border"],["color","#f77708"],["slot","start",3,"click"],["menu","primerMenu","color","primary"],["color","tertiary","value","recibidas",3,"ionChange"],["value","aceptadas"],["value","ofertadas"],[3,"scrollEvents"],["content",""],["slot","fixed","pullFactor","0.8","pullMin","60","pullMax","120",3,"ionRefresh"],["refresh",""],["mode","ios","pager","false","scrollbar","ios"],["slides",""],["fixed",""],[4,"ngIf"],["size","12"],["lista",""],[4,"ngFor","ngForOf"],["threshold","150px","position","bottom",3,"disabled","ionInfinite"],["color","medium",3,"click"],[1,"ion-text-right"],["color","light",3,"click"],["slot","end",1,"ion-text-right"]],template:function(i,o){1&i&&(a.Nb(0,"ion-header",0),a.Nb(1,"ion-toolbar",1),a.Nb(2,"ion-buttons",2),a.Vb("click",(function(){return o.toggleMenu()})),a.Lb(3,"ion-menu-button",3),a.Mb(),a.Nb(4,"ion-title"),a.mc(5,"Ofertas pasajero"),a.Mb(),a.Mb(),a.Nb(6,"ion-segment",4),a.Vb("ionChange",(function(i){return o.segmentChanged(i)})),a.Nb(7,"ion-segment-button",5),a.Nb(8,"ion-label"),a.mc(9,"Aceptadas"),a.Mb(),a.Mb(),a.Nb(10,"ion-segment-button",6),a.Nb(11,"ion-label"),a.mc(12,"Ofertadas"),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Nb(13,"ion-content",7,8),a.Nb(15,"ion-refresher",9,10),a.Vb("ionRefresh",(function(i){return o.recargar(i)})),a.Lb(17,"ion-refresher-content"),a.Mb(),a.Nb(18,"ion-slides",11,12),a.Nb(20,"ion-slide"),a.Nb(21,"ion-grid",13),a.lc(22,h,3,1,"ion-row",14),a.Mb(),a.Mb(),a.Nb(23,"ion-slide"),a.Nb(24,"ion-grid",13),a.Nb(25,"ion-row"),a.Nb(26,"ion-col",15),a.Nb(27,"ion-list",null,16),a.lc(29,N,11,6,"ion-item-sliding",17),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Nb(30,"ion-infinite-scroll",18),a.Vb("ionInfinite",(function(i){return o.cargarOfertas(i)})),a.Lb(31,"ion-infinite-scroll-content"),a.Mb(),a.Mb()),2&i&&(a.Ab(13),a.cc("scrollEvents",!0),a.Ab(9),a.cc("ngIf",o.aceptadas),a.Ab(7),a.cc("ngForOf",o.ofertas),a.Ab(1),a.cc("disabled",!o.habilitado))},directives:[s.q,s.X,s.i,s.E,s.W,s.M,s.hb,s.N,s.A,s.n,s.I,s.J,s.R,s.Q,s.p,e.l,s.L,s.m,s.B,e.k,s.t,s.u,s.w,s.z],styles:[""]}),i})()}];let O=(()=>{class i{}return i.\u0275mod=a.Ib({type:i}),i.\u0275inj=a.Hb({factory:function(o){return new(o||i)},imports:[[r.i.forChild(v)],r.i]}),i})(),w=(()=>{class i{}return i.\u0275mod=a.Ib({type:i}),i.\u0275inj=a.Hb({factory:function(o){return new(o||i)},imports:[[e.c,n.a,s.Y,O]]}),i})()}}]);