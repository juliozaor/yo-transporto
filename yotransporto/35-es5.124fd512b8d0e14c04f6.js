function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"6RBR":function(e,t,r){"use strict";r.r(t),r.d(t,"VerOfertaConductorPageModule",(function(){return j}));var o=r("ofXK"),n=r("3Pt+"),a=r("TEn/"),i=r("tyNb"),c=r("mrSG"),b=r("ZJfK"),s=r("fXoL"),u=r("IbGY"),l=r("on2l"),f=r("H+l1");function d(e,t){1&e&&(s.Nb(0,"h4"),s.mc(1,"Ciudad"),s.Mb())}function h(e,t){1&e&&(s.Nb(0,"h4"),s.mc(1,"Interurbano"),s.Mb())}function p(e,t){1&e&&(s.Nb(0,"h4"),s.mc(1,"Domicilio"),s.Mb())}function m(e,t){1&e&&(s.Nb(0,"h4"),s.mc(1,"Mercancia"),s.Mb())}function M(e,t){if(1&e&&(s.Nb(0,"ion-row"),s.Nb(1,"ion-col",9),s.Nb(2,"ion-text",8),s.Nb(3,"h3"),s.mc(4,"Comentarios: "),s.Mb(),s.Mb(),s.Mb(),s.Nb(5,"ion-col",9),s.Nb(6,"ion-text"),s.Nb(7,"p"),s.mc(8),s.Mb(),s.Mb(),s.Mb(),s.Mb()),2&e){var r=s.Xb(2);s.Ab(8),s.nc(r.oferta.comentarios)}}function N(e,t){if(1&e){var r=s.Ob();s.Nb(0,"ion-col",15),s.Nb(1,"ion-chip",17),s.Vb("click",(function(){s.ic(r);var e=s.Xb().$implicit;return s.Xb(2).chatear(e)})),s.Nb(2,"ion-label"),s.mc(3,"Chat"),s.Mb(),s.Mb(),s.Mb()}}function g(e,t){if(1&e){var r=s.Ob();s.Nb(0,"ion-col",15),s.Nb(1,"ion-chip",17),s.Vb("click",(function(){s.ic(r);var e=s.Xb().$implicit;return s.Xb(2).aceptar(e.codOfertaConductor,e.idSignal)})),s.Nb(2,"ion-label"),s.mc(3,"Aceptar"),s.Mb(),s.Mb(),s.Mb()}}function v(e,t){if(1&e){var r=s.Ob();s.Nb(0,"ion-col",15),s.Nb(1,"ion-chip",18),s.Vb("click",(function(){s.ic(r);var e=s.Xb(),t=e.$implicit,o=e.index;return s.Xb(2).rechazar(t.codOfertaConductor,o)})),s.Nb(2,"ion-label"),s.mc(3,"Rechazar"),s.Mb(),s.Mb(),s.Mb()}}function C(e,t){if(1&e&&(s.Nb(0,"ion-row",14),s.Nb(1,"ion-col",15),s.Nb(2,"ion-label"),s.Nb(3,"p"),s.mc(4),s.Mb(),s.Nb(5,"p"),s.mc(6),s.Mb(),s.Mb(),s.Mb(),s.lc(7,N,4,0,"ion-col",16),s.lc(8,g,4,0,"ion-col",16),s.lc(9,v,4,0,"ion-col",16),s.Mb()),2&e){var r=t.$implicit,o=s.Xb(2);s.Ab(4),s.nc(r.nombre),s.Ab(2),s.nc(r.valor),s.Ab(1),s.cc("ngIf",1==o.habilitarChat),s.Ab(1),s.cc("ngIf",0==o.habilitarChat),s.Ab(1),s.cc("ngIf",1==o.habilitarRechazar)}}function w(e,t){if(1&e){var r=s.Ob();s.Nb(0,"ion-grid",6),s.Nb(1,"ion-row"),s.Nb(2,"ion-col",7),s.Nb(3,"ion-text"),s.Nb(4,"h3"),s.Nb(5,"ion-label",8),s.mc(6,"Origen:"),s.Mb(),s.mc(7),s.Mb(),s.Nb(8,"h3"),s.Nb(9,"ion-label",8),s.mc(10,"Destino:"),s.Mb(),s.mc(11),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Nb(12,"ion-row"),s.Nb(13,"ion-col",9),s.Nb(14,"ion-text",8),s.Nb(15,"h3"),s.mc(16,"Tipo de servicio: "),s.Mb(),s.Mb(),s.Mb(),s.Nb(17,"ion-col",9),s.Nb(18,"ion-text"),s.lc(19,d,2,0,"h4",10),s.lc(20,h,2,0,"h4",10),s.lc(21,p,2,0,"h4",10),s.lc(22,m,2,0,"h4",10),s.Mb(),s.Mb(),s.Mb(),s.Nb(23,"ion-row"),s.Nb(24,"ion-col",7),s.Nb(25,"ion-text"),s.Nb(26,"h3"),s.Nb(27,"ion-label",8),s.mc(28,"Fecha de salida:"),s.Mb(),s.mc(29),s.Mb(),s.Nb(30,"h3"),s.Nb(31,"ion-label",8),s.mc(32,"Hora de salida:"),s.Mb(),s.mc(33),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Nb(34,"ion-row"),s.Nb(35,"ion-col",9),s.Nb(36,"ion-text"),s.Nb(37,"h3"),s.Nb(38,"ion-label",8),s.mc(39,"Capacidad de carga:"),s.Mb(),s.Mb(),s.Nb(40,"p"),s.mc(41),s.Mb(),s.Mb(),s.Mb(),s.Nb(42,"ion-col",9),s.Nb(43,"ion-text"),s.Nb(44,"h3"),s.Nb(45,"ion-label",8),s.mc(46,"Cupo para pasajeros:"),s.Mb(),s.Mb(),s.Nb(47,"p"),s.mc(48),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Nb(49,"ion-row"),s.Nb(50,"ion-col",7),s.Nb(51,"ion-text"),s.Nb(52,"h3"),s.Nb(53,"ion-label",8),s.mc(54,"paqueteria::"),s.Mb(),s.mc(55),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.lc(56,M,9,1,"ion-row",10),s.Nb(57,"ion-row"),s.Nb(58,"ion-col",11),s.Nb(59,"ion-text",8),s.Nb(60,"h1"),s.mc(61),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Nb(62,"ion-grid"),s.Nb(63,"ion-row"),s.Nb(64,"ion-col",7),s.Nb(65,"ion-label"),s.Nb(66,"h1"),s.mc(67,"Pasajeros que aceptaron la oferta"),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.lc(68,C,10,5,"ion-row",12),s.Mb(),s.Nb(69,"ion-row"),s.Nb(70,"ion-col",7),s.Nb(71,"ion-button",13),s.Vb("click",(function(){return s.ic(r),s.Xb().finalizarOferta()})),s.mc(72," Finalizar Oferta "),s.Mb(),s.Mb(),s.Mb(),s.Mb()}if(2&e){var o=s.Xb();s.Ab(7),s.oc(" ",o.oferta.origen,""),s.Ab(4),s.oc(" ",o.oferta.destino,""),s.Ab(8),s.cc("ngIf","1"==o.oferta.codTipoServicio),s.Ab(1),s.cc("ngIf","2"==o.oferta.codTipoServicio),s.Ab(1),s.cc("ngIf","3"==o.oferta.codTipoServicio),s.Ab(1),s.cc("ngIf","4"==o.oferta.codTipoServicio),s.Ab(7),s.oc(" ",o.oferta.fecha_salida,""),s.Ab(4),s.oc(" ",o.oferta.hora_salida,""),s.Ab(8),s.nc(o.oferta.capacidadCarga),s.Ab(7),s.nc(o.oferta.cantPasajeros),s.Ab(7),s.oc(" ",o.oferta.paqueteriaMensajeria,""),s.Ab(1),s.cc("ngIf",""!=o.oferta.comentarios),s.Ab(5),s.oc("$",o.oferta.tarifa,""),s.Ab(7),s.cc("ngForOf",o.pasajeros)}}var O,x,k,A=[{path:"",component:(O=function(){function e(t,r,o,n,a,i,c){_classCallCheck(this,e),this.conductorService=t,this.usuarioService=r,this.navCtrl=o,this.modalCtrl=n,this.alertController=a,this.actionSheetCtrl=i,this.push=c,this.ofertasAceptadas=[],this.pasajeros=[],this.habilitarChat=!1,this.habilitarRechazar=!0}return _createClass(e,[{key:"ngOnInit",value:function(){this.cargarDatos()}},{key:"cargarDatos",value:function(){return Object(c.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.conductorService.ofertaConductor;case 2:this.oferta=e.sent,this.conductorService.buscarOfertasAceptadas(this.oferta.idOfertaConductor).subscribe((function(e){t.ofertasAceptadas=e.ofertas,t.ofertasAceptadas.forEach((function(e){t.usuarioService.datosUsuario(e.codPasajero).subscribe((function(r){var o={nombre:r.usuario.nombre,codOfertaConductor:e.idPasajeroOfertaConductor,valor:e.valor,aceptada:e.aceptada,idSignal:r.usuario.idSignal};t.habilitarChat=e.aceptada,t.pasajeros.push(o)}))}))}));case 4:case"end":return e.stop()}}),e,this)})))}},{key:"chatear",value:function(e){return Object(c.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalCtrl.create({component:b.a,componentProps:{idOferta:e.codOfertaConductor,nombre:e.nombre}});case 2:return r=t.sent,t.next=5,r.present();case 5:case"end":return t.stop()}}),t,this)})))}},{key:"aceptar",value:function(e,t){return Object(c.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function r(){var o,n=this;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.alertController.create({message:"Esta seguro que desea aceptar este pasajero?",buttons:[{text:"Cancelar",role:"cancel"},{text:"Aceptar",handler:function(r){return Object(c.__awaiter)(n,void 0,void 0,regeneratorRuntime.mark((function r(){var o,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:this.conductorService.actualizarPasajeroOfertaConductor(e,{estado:!1,aceptada:!0})&&(this.habilitarChat=!0,this.habilitarRechazar=!1,o={oferta:this.oferta,lugar:"aceptar pasajero"},JSON.stringify({mensaje:"El conductor aceptado su oferta",titulo:"Oferta Aceptada",idSignal:t}),n=JSON.stringify(o),console.log(n));case 1:case"end":return r.stop()}}),r,this)})))}}]});case 2:return o=r.sent,r.next=5,o.present();case 5:case"end":return r.stop()}}),r,this)})))}},{key:"rechazar",value:function(e,t){return Object(c.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function r(){var o,n=this;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.alertController.create({message:"Esta seguro que desea rechazar este usuario?",buttons:[{text:"Cancelar",role:"cancel"},{text:"Aceptar",handler:function(r){return Object(c.__awaiter)(n,void 0,void 0,regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:this.conductorService.actualizarPasajeroOfertaConductor(e,{estado:!0,aceptada:!1})&&this.ofertasAceptadas.splice(t,1);case 1:case"end":return r.stop()}}),r,this)})))}}]});case 2:return o=r.sent,r.next=5,o.present();case 5:case"end":return r.stop()}}),r,this)})))}},{key:"finalizarOferta",value:function(){return Object(c.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertController.create({message:"Esta seguro que desea terminar esta oferta?",buttons:[{text:"Cancelar",role:"cancel"},{text:"Aceptar",handler:function(e){return Object(c.__awaiter)(r,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.conductorService.terminarOferta(this.oferta.idOfertaConductor)&&this.navCtrl.navigateRoot("/conductor",{animated:!0});case 1:case"end":return e.stop()}}),e,this)})))}}]});case 2:return t=e.sent,e.next=5,t.present();case 5:case"end":return e.stop()}}),e,this)})))}}]),e}(),O.\u0275fac=function(e){return new(e||O)(s.Kb(u.a),s.Kb(l.a),s.Kb(a.bb),s.Kb(a.ab),s.Kb(a.b),s.Kb(a.a),s.Kb(f.a))},O.\u0275cmp=s.Eb({type:O,selectors:[["app-ver-oferta-conductor"]],decls:10,vars:1,consts:[["color","#f77708"],["slot","start"],["defaultHref","/conductor"],["slot","end",1,"imagenIco"],["src","./assets/imagenes/logo1.png"],["fixed","",4,"ngIf"],["fixed",""],["size","12"],["color","secondary"],["size","6"],[4,"ngIf"],["size","12",1,"aling-center"],["class","border",4,"ngFor","ngForOf"],["fill","outline","expand","full","shape","round",3,"click"],[1,"border"],["size","4"],["size","4",4,"ngIf"],["color","dark","mode","ios","outline","false",1,"color-blue",3,"click"],["color","dark","mode","ios","outline","false",1,"color-red",3,"click"]],template:function(e,t){1&e&&(s.Nb(0,"ion-header"),s.Nb(1,"ion-toolbar",0),s.Nb(2,"ion-buttons",1),s.Lb(3,"ion-back-button",2),s.Mb(),s.Nb(4,"ion-title"),s.mc(5,"Ver oferta"),s.Mb(),s.Nb(6,"ion-buttons",3),s.Lb(7,"img",4),s.Mb(),s.Mb(),s.Mb(),s.Nb(8,"ion-content"),s.lc(9,w,73,14,"ion-grid",5),s.Mb()),2&e&&(s.Ab(9),s.cc("ngIf",t.oferta))},directives:[a.q,a.W,a.i,a.f,a.g,a.V,a.n,o.k,a.p,a.K,a.m,a.U,a.A,o.j,a.h,a.l],styles:[".bgcolor[_ngcontent-%COMP%]{background:#ccd1e0}.border[_ngcontent-%COMP%]{border:1px solid #4d4f50}ion-chip[_ngcontent-%COMP%]{background:#795df1}.color-blue[_ngcontent-%COMP%]{background:rgba(61,250,77,.69)}.color-red[_ngcontent-%COMP%]{background:rgba(255,4,4,.55)}"]}),O)}],_=((k=function e(){_classCallCheck(this,e)}).\u0275mod=s.Ib({type:k}),k.\u0275inj=s.Hb({factory:function(e){return new(e||k)},imports:[[i.i.forChild(A)],i.i]}),k),j=((x=function e(){_classCallCheck(this,e)}).\u0275mod=s.Ib({type:x}),x.\u0275inj=s.Hb({factory:function(e){return new(e||x)},imports:[[o.c,n.a,a.X,_]]}),x)}}]);