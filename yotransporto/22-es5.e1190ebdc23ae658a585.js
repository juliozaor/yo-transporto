function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{TQtl:function(e,t,o){"use strict";o.r(t),o.d(t,"OfertasPasajeroPageModule",(function(){return w}));var r=o("ofXK"),i=o("3Pt+"),n=o("TEn/"),a=o("tyNb"),c=o("mrSG"),s=o("fXoL"),l=o("on2l"),b=["slides"],u=["lista"],f=["content"];function d(e,t){if(1&e){var o=s.Ob();s.Nb(0,"ion-list",null,15),s.Nb(2,"ion-item",18),s.Vb("click",(function(){s.ic(o);var e=t.$implicit;return s.Xb(2).verOfertaConductor(e)})),s.Nb(3,"ion-label"),s.Nb(4,"h1"),s.mc(5),s.Mb(),s.Nb(6,"p"),s.mc(7),s.Mb(),s.Nb(8,"p"),s.mc(9),s.Mb(),s.Nb(10,"p"),s.mc(11),s.Mb(),s.Nb(12,"p",19),s.mc(13),s.Mb(),s.Mb(),s.Mb(),s.Mb()}if(2&e){var r=t.$implicit;s.Ab(5),s.oc("Conductor: ",r.usuario.nombre,""),s.Ab(2),s.oc("Origen: ",r.oferta.origen,""),s.Ab(2),s.oc("Destino: ",r.oferta.destino,""),s.Ab(2),s.oc("Comentarios: ",r.oferta.comentarios,""),s.Ab(2),s.oc("precio: ",r.oferta.tarifa,"")}}function p(e,t){if(1&e&&(s.Nb(0,"ion-row"),s.Nb(1,"ion-col",14),s.lc(2,d,14,5,"ion-list",16),s.Mb(),s.Mb()),2&e){var o=s.Xb();s.Ab(2),s.cc("ngForOf",o.aceptadas)}}function h(e,t){1&e&&(s.Nb(0,"h1"),s.mc(1,"Ciudad"),s.Mb())}function m(e,t){1&e&&(s.Nb(0,"h1"),s.mc(1,"Interurbano"),s.Mb())}function g(e,t){1&e&&(s.Nb(0,"h1"),s.mc(1,"Envio"),s.Mb())}function v(e,t){1&e&&(s.Nb(0,"h1"),s.mc(1,"Mercancia"),s.Mb())}function y(e,t){if(1&e){var o=s.Ob();s.Nb(0,"ion-item-sliding"),s.Nb(1,"ion-item",20),s.Vb("click",(function(){s.ic(o);var e=t.$implicit;return s.Xb().verOfertaPasajero(e)})),s.Nb(2,"ion-label"),s.lc(3,h,2,0,"h1",13),s.lc(4,m,2,0,"h1",13),s.lc(5,g,2,0,"h1",13),s.lc(6,v,2,0,"h1",13),s.Nb(7,"p"),s.mc(8),s.Mb(),s.Mb(),s.Nb(9,"ion-label",21),s.mc(10),s.Mb(),s.Mb(),s.Mb()}if(2&e){var r=t.$implicit;s.Ab(3),s.cc("ngIf","1"==r.codTipoServicio),s.Ab(1),s.cc("ngIf","2"==r.codTipoServicio),s.Ab(1),s.cc("ngIf","3"==r.codTipoServicio),s.Ab(1),s.cc("ngIf","4"==r.codTipoServicio),s.Ab(2),s.oc("Comentarios: ",r.comentarios,""),s.Ab(2),s.oc(" precio: ",r.tarifa," ")}}var M,N,A,C=[{path:"",component:(M=function(){function e(t,o,r){_classCallCheck(this,e),this.menuCtrl=t,this.usuarioService=o,this.navCtrl=r,this.ofertas=[],this.aceptadas=[],this.habilitado=!0}return _createClass(e,[{key:"ngOnInit",value:function(){this.cargarOfertas(!1)}},{key:"cargarOfertas",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object(c.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function o(){var r=this;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:this.usuarioService.getUsuarioToken().then((function(o){r.usuario=o,r.usuarioService.buscarOfertasCPasajero(r.usuario.idUsuario,t).subscribe((function(t){var o;console.log(t.ofertas),(o=r.ofertas).push.apply(o,_toConsumableArray(t.ofertas)),e&&(console.log("entro al si",t.ofertas.length),e.target.complete(),0===t.ofertas.length&&"ofertadas"===r.tipo&&(r.habilitado=!1))})),r.usuarioService.ofertasAceptadas(r.usuario.idUsuario,t).subscribe((function(t){var o;(o=r.aceptadas).push.apply(o,_toConsumableArray(t.ofertas)),e&&(console.log("entro al si",t.ofertas.length),e.target.complete(),0===t.ofertas.length&&"aceptadas"===r.tipo&&(r.habilitado=!1))}))})).catch((function(e){console.log(e)}));case 1:case"end":return o.stop()}}),o,this)})))}},{key:"recargar",value:function(e){this.aceptadas=[],this.ofertas=[],this.cargarOfertas(e,!0),this.habilitado=!0}},{key:"toggleMenu",value:function(){this.menuCtrl.toggle()}},{key:"segmentChanged",value:function(e){var t=e.detail.value;if(console.log(t),"aceptadas"===t)return this.slides.lockSwipes(!1),this.slides.slideTo(0),this.slides.lockSwipes(!0),this.content.scrollToTop(),void(this.tipo="aceptadas");this.slides.lockSwipes(!1),this.slides.slideTo(1),this.slides.lockSwipes(!0),this.content.scrollToTop(),this.tipo="ofertadas"}},{key:"verOfertaConductor",value:function(e){this.usuarioService.ofertaConductor=e,this.navCtrl.navigateRoot("/ver-oferta/2",{animated:!0})}},{key:"verOfertaPasajero",value:function(e){this.usuarioService.ofertaPasajero=e,this.navCtrl.navigateRoot("/ver-oferta-pasajero",{animated:!0})}}]),e}(),M.\u0275fac=function(e){return new(e||M)(s.Kb(n.ab),s.Kb(l.a),s.Kb(n.cb))},M.\u0275cmp=s.Eb({type:M,selectors:[["app-ofertas-pasajero"]],viewQuery:function(e,t){var o;1&e&&(s.qc(b,!0),s.qc(u,!0),s.qc(f,!0)),2&e&&(s.gc(o=s.Wb())&&(t.slides=o.first),s.gc(o=s.Wb())&&(t.lista=o.first),s.gc(o=s.Wb())&&(t.content=o.first))},decls:33,vars:4,consts:[[1,"ion-no-border"],["slot","start",3,"click"],["menu","primerMenu","color","primary"],["color","tertiary","value","recibidas",3,"ionChange"],["value","aceptadas"],["value","ofertadas"],[3,"scrollEvents"],["content",""],["slot","fixed","pullFactor","0.8","pullMin","60","pullMax","120",3,"ionRefresh"],["refresh",""],["mode","ios","pager","false","scrollbar","ios"],["slides",""],["fixed",""],[4,"ngIf"],["size","12"],["lista",""],[4,"ngFor","ngForOf"],["threshold","150px","position","bottom",3,"disabled","ionInfinite"],["color","medium",3,"click"],[1,"ion-text-right"],["color","light",3,"click"],["slot","end",1,"ion-text-right"]],template:function(e,t){1&e&&(s.Nb(0,"ion-header",0),s.Nb(1,"ion-toolbar"),s.Nb(2,"ion-buttons",1),s.Vb("click",(function(){return t.toggleMenu()})),s.Lb(3,"ion-menu-button",2),s.Mb(),s.Nb(4,"ion-title"),s.mc(5,"Ofertas pasajero"),s.Mb(),s.Mb(),s.Mb(),s.Nb(6,"ion-header"),s.Nb(7,"ion-segment",3),s.Vb("ionChange",(function(e){return t.segmentChanged(e)})),s.Nb(8,"ion-segment-button",4),s.Nb(9,"ion-label"),s.mc(10,"Aceptadas"),s.Mb(),s.Mb(),s.Nb(11,"ion-segment-button",5),s.Nb(12,"ion-label"),s.mc(13,"Ofertadas"),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Nb(14,"ion-content",6,7),s.Nb(16,"ion-refresher",8,9),s.Vb("ionRefresh",(function(e){return t.recargar(e)})),s.Lb(18,"ion-refresher-content"),s.Mb(),s.Nb(19,"ion-slides",10,11),s.Nb(21,"ion-slide"),s.Nb(22,"ion-grid",12),s.lc(23,p,3,1,"ion-row",13),s.Mb(),s.Mb(),s.Nb(24,"ion-slide"),s.Nb(25,"ion-grid",12),s.Nb(26,"ion-row"),s.Nb(27,"ion-col",14),s.Nb(28,"ion-list",null,15),s.lc(30,y,11,6,"ion-item-sliding",16),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Nb(31,"ion-infinite-scroll",17),s.Vb("ionInfinite",(function(e){return t.cargarOfertas(e)})),s.Lb(32,"ion-infinite-scroll-content"),s.Mb(),s.Mb()),2&e&&(s.Ab(14),s.cc("scrollEvents",!0),s.Ab(9),s.cc("ngIf",t.aceptadas),s.Ab(7),s.cc("ngForOf",t.ofertas),s.Ab(1),s.cc("disabled",!t.habilitado))},directives:[n.q,n.X,n.i,n.E,n.W,n.M,n.hb,n.N,n.A,n.n,n.I,n.J,n.R,n.Q,n.p,r.l,n.L,n.m,n.B,r.k,n.t,n.u,n.w,n.z],styles:[""]}),M)}],k=((A=function e(){_classCallCheck(this,e)}).\u0275mod=s.Ib({type:A}),A.\u0275inj=s.Hb({factory:function(e){return new(e||A)},imports:[[a.i.forChild(C)],a.i]}),A),w=((N=function e(){_classCallCheck(this,e)}).\u0275mod=s.Ib({type:N}),N.\u0275inj=s.Hb({factory:function(e){return new(e||N)},imports:[[r.c,i.a,n.Y,k]]}),N)}}]);