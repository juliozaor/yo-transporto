function _classCallCheck(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(o,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(o,a.key,a)}}function _createClass(o,e,t){return e&&_defineProperties(o.prototype,e),t&&_defineProperties(o,t),o}(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"4F8O":function(o,e,t){"use strict";t.r(e),t.d(e,"VerOfertaConductorPasajeroPageModule",(function(){return L}));var a=t("ofXK"),n=t("3Pt+"),r=t("TEn/"),i=t("tyNb"),c=t("mrSG"),b=t("ZJfK"),f=t("6gyQ"),s=t("fXoL"),l=t("IbGY"),u=t("H+l1");function d(o,e){1&o&&(s.Nb(0,"h4"),s.mc(1,"Ciudad"),s.Mb())}function h(o,e){1&o&&(s.Nb(0,"h4"),s.mc(1,"Interurbano"),s.Mb())}function M(o,e){1&o&&(s.Nb(0,"h4"),s.mc(1,"Domicilio"),s.Mb())}function p(o,e){1&o&&(s.Nb(0,"h4"),s.mc(1,"Mercancia"),s.Mb())}function N(o,e){if(1&o&&(s.Nb(0,"ion-row"),s.Nb(1,"ion-col",11),s.Nb(2,"ion-text",7),s.Nb(3,"h4"),s.mc(4,"Recoger en el horario: "),s.Mb(),s.Mb(),s.Mb(),s.Nb(5,"ion-col",11),s.Nb(6,"ion-text"),s.Nb(7,"h4"),s.mc(8),s.Mb(),s.Mb(),s.Mb(),s.Mb()),2&o){var t=s.Xb(2);s.Ab(8),s.pc("",t.oferta.oferta.horaInicial," - ",t.oferta.oferta.horaFinal,"")}}function m(o,e){if(1&o&&(s.Nb(0,"ion-row"),s.Nb(1,"ion-col",11),s.Nb(2,"ion-text",7),s.Nb(3,"h4"),s.mc(4,"Fecha: "),s.Mb(),s.Mb(),s.Mb(),s.Nb(5,"ion-col",11),s.Nb(6,"ion-text"),s.Nb(7,"h4"),s.mc(8),s.Mb(),s.Mb(),s.Mb(),s.Mb()),2&o){var t=s.Xb(2);s.Ab(8),s.nc(t.oferta.oferta.fecha)}}function g(o,e){1&o&&(s.Nb(0,"p"),s.Lb(1,"ion-icon",14),s.mc(2,"Aire acondicionado"),s.Mb())}function v(o,e){1&o&&(s.Nb(0,"p"),s.Lb(1,"ion-icon",14),s.mc(2,"Musica"),s.Mb())}function w(o,e){1&o&&(s.Nb(0,"p"),s.Lb(1,"ion-icon",14),s.mc(2,"Asientos para Bebe"),s.Mb())}function A(o,e){1&o&&(s.Nb(0,"p"),s.Lb(1,"ion-icon",14),s.mc(2,"Maletero"),s.Mb())}function C(o,e){if(1&o&&(s.Nb(0,"ion-row"),s.Nb(1,"ion-col",11),s.Nb(2,"ion-text",7),s.Nb(3,"h3"),s.mc(4,"Requiero: "),s.Mb(),s.Mb(),s.Mb(),s.Nb(5,"ion-col",11),s.Nb(6,"ion-text"),s.lc(7,g,3,0,"p",5),s.lc(8,v,3,0,"p",5),s.lc(9,w,3,0,"p",5),s.lc(10,A,3,0,"p",5),s.Mb(),s.Mb(),s.Mb()),2&o){var t=s.Xb(2);s.Ab(7),s.cc("ngIf",0!=t.oferta.oferta.aire),s.Ab(1),s.cc("ngIf",0!=t.oferta.oferta.musica),s.Ab(1),s.cc("ngIf",0!=t.oferta.oferta.asientos),s.Ab(1),s.cc("ngIf",0!=t.oferta.oferta.maleta)}}function x(o,e){if(1&o&&(s.Nb(0,"ion-row"),s.Nb(1,"ion-col",11),s.Nb(2,"ion-text",7),s.Nb(3,"h3"),s.mc(4,"Comentarios: "),s.Mb(),s.Mb(),s.Mb(),s.Nb(5,"ion-col",11),s.Nb(6,"ion-text"),s.Nb(7,"p"),s.mc(8),s.Mb(),s.Mb(),s.Mb(),s.Mb()),2&o){var t=s.Xb(2);s.Ab(8),s.nc(t.oferta.oferta.comentarios)}}function I(o,e){1&o&&(s.Nb(0,"ion-col",10),s.Nb(1,"ion-text",15),s.Nb(2,"h4"),s.mc(3,"Debe esperar que el due\xf1o de la oferta acepte para que se habilite el chat"),s.Mb(),s.Mb(),s.Mb())}function k(o,e){if(1&o){var t=s.Ob();s.Nb(0,"ion-row"),s.Nb(1,"ion-col",6),s.Nb(2,"ion-list"),s.Nb(3,"ion-radio-group",16),s.Vb("ngModelChange",(function(o){return s.ic(t),s.Xb(2).valor=o})),s.Nb(4,"ion-item"),s.Nb(5,"ion-label"),s.mc(6),s.Mb(),s.Lb(7,"ion-radio",17),s.Mb(),s.Nb(8,"ion-item"),s.Nb(9,"ion-label"),s.mc(10,"contraoferta: $ "),s.Mb(),s.Nb(11,"ion-radio",18),s.Vb("ngModelChange",(function(o){return s.ic(t),s.Xb(2).contraoferta=o})),s.Mb(),s.Nb(12,"ion-input",19),s.Vb("ngModelChange",(function(o){return s.ic(t),s.Xb(2).contraoferta=o})),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb()}if(2&o){var a=s.Xb(2);s.Ab(3),s.cc("ngModel",a.valor),s.Ab(3),s.oc("Tarifa de la oferta: $ ",a.oferta.oferta.tarifa,""),s.Ab(1),s.dc("value",a.oferta.oferta.tarifa),s.Ab(4),s.cc("ngModel",a.contraoferta),s.Ab(1),s.cc("ngModel",a.contraoferta)}}function O(o,e){if(1&o&&(s.Nb(0,"ion-row"),s.Nb(1,"ion-col",6),s.Nb(2,"ion-item"),s.Nb(3,"ion-text",7),s.Nb(4,"h3"),s.mc(5),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb()),2&o){var t=s.Xb(2);s.Ab(5),s.oc("Tarifa de la oferta: $ ",t.oferta.oferta.tarifa,"")}}function y(o,e){if(1&o){var t=s.Ob();s.Nb(0,"ion-row"),s.Nb(1,"ion-col",20),s.Nb(2,"ion-button",21),s.Vb("click",(function(){return s.ic(t),s.Xb(2).aceptar()})),s.mc(3," Aceptar "),s.Mb(),s.Mb(),s.Mb()}if(2&o){var a=s.Xb(2);s.Ab(2),s.cc("disabled",a.habilitarBoton)}}function j(o,e){if(1&o){var t=s.Ob();s.Nb(0,"ion-row"),s.Nb(1,"ion-col",20),s.Nb(2,"ion-button",22),s.Vb("click",(function(){return s.ic(t),s.Xb(2).calificar()})),s.mc(3," Finalizar oferta "),s.Mb(),s.Mb(),s.Mb()}}function P(o,e){if(1&o){var t=s.Ob();s.Nb(0,"ion-grid"),s.Nb(1,"ion-row"),s.Nb(2,"ion-col",6),s.Nb(3,"ion-text"),s.Nb(4,"h3"),s.Nb(5,"ion-label",7),s.mc(6,"Usuario:"),s.Mb(),s.mc(7),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Nb(8,"ion-row"),s.Nb(9,"ion-col",8),s.Nb(10,"ion-avatar"),s.Lb(11,"img",9),s.Mb(),s.Mb(),s.Nb(12,"ion-col",10),s.Nb(13,"ion-text"),s.Nb(14,"h3"),s.Nb(15,"ion-label",7),s.mc(16,"Origen:"),s.Mb(),s.mc(17),s.Mb(),s.Nb(18,"h3"),s.Nb(19,"ion-label",7),s.mc(20,"Destino:"),s.Mb(),s.mc(21),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Nb(22,"ion-row"),s.Nb(23,"ion-col",11),s.Nb(24,"ion-text",7),s.Nb(25,"h3"),s.mc(26,"Tipo de servicio: "),s.Mb(),s.Mb(),s.Mb(),s.Nb(27,"ion-col",11),s.Nb(28,"ion-text"),s.lc(29,d,2,0,"h4",5),s.lc(30,h,2,0,"h4",5),s.lc(31,M,2,0,"h4",5),s.lc(32,p,2,0,"h4",5),s.Mb(),s.Mb(),s.Mb(),s.lc(33,N,9,2,"ion-row",5),s.lc(34,m,9,1,"ion-row",5),s.lc(35,C,11,4,"ion-row",5),s.lc(36,x,9,1,"ion-row",5),s.Nb(37,"ion-row"),s.Nb(38,"ion-col",8),s.Nb(39,"ion-button",12),s.Vb("click",(function(){return s.ic(t),s.Xb().chat()})),s.mc(40," chat "),s.Mb(),s.Mb(),s.lc(41,I,4,0,"ion-col",13),s.Mb(),s.lc(42,k,13,5,"ion-row",5),s.lc(43,O,6,1,"ion-row",5),s.lc(44,y,4,1,"ion-row",5),s.lc(45,j,4,0,"ion-row",5),s.Mb()}if(2&o){var a=s.Xb();s.Ab(7),s.oc(" ",a.oferta.usuario.nombre," "),s.Ab(4),s.ec("src","../../../assets/avatars/",a.oferta.usuario.foto,"",s.jc),s.Ab(6),s.oc(" ",a.oferta.oferta.origen,""),s.Ab(4),s.oc(" ",a.oferta.oferta.destino,""),s.Ab(8),s.cc("ngIf",1==a.oferta.oferta.codTipoServicio),s.Ab(1),s.cc("ngIf",2==a.oferta.oferta.codTipoServicio),s.Ab(1),s.cc("ngIf",3==a.oferta.oferta.codTipoServicio),s.Ab(1),s.cc("ngIf",4==a.oferta.oferta.codTipoServicio),s.Ab(1),s.cc("ngIf",null!=a.oferta.oferta.horaInicial||null!=a.oferta.oferta.horaFinal),s.Ab(1),s.cc("ngIf",null!=a.oferta.oferta.fecha),s.Ab(1),s.cc("ngIf",0!=a.oferta.oferta.aire||0!=a.oferta.oferta.musica||0!=a.oferta.oferta.sientos||0!=a.oferta.oferta.maleta),s.Ab(1),s.cc("ngIf",null!=a.oferta.oferta.comentarios),s.Ab(3),s.cc("disabled",a.habilitarChat),s.Ab(2),s.cc("ngIf",0==a.aceptada),s.Ab(1),s.cc("ngIf","1"==a.desde),s.Ab(1),s.cc("ngIf","2"==a.desde),s.Ab(1),s.cc("ngIf","1"==a.desde),s.Ab(1),s.cc("ngIf","2"==a.desde)}}var X,_,S,R=[{path:"",component:(X=function(){function o(e,t,a,n,r,i){_classCallCheck(this,o),this.activatedRoute=e,this.conductorService=t,this.alertController=a,this.modalCtrl=n,this.navCtrl=r,this.push=i,this.habilitarBoton=!1,this.habilitarChat=!0,this.aceptada=!1}return _createClass(o,[{key:"ngOnInit",value:function(){this.desde=this.activatedRoute.snapshot.paramMap.get("from"),this.oferta=this.conductorService.ofertaPasajero,this.valor=this.oferta.oferta.tarifa,"2"===this.desde&&(this.habilitarBoton=!0,this.oferta.completa.aceptada&&(this.habilitarChat=!1,this.aceptada=!0)),console.log(this.oferta)}},{key:"aceptar",value:function(){return Object(c.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function o(){var e,t=this;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,this.alertController.create({message:"Esta seguro de aceptar esta oferta",buttons:[{text:"Cancelar",role:"cancel"},{text:"Aceptar",handler:function(){var o={codOfertaPasajero:t.oferta.oferta.idOfertaPasajero,valor:String(t.valor)};t.conductorService.aceptarOferta(o).subscribe((function(o){t.habilitarBoton=!0,t.navCtrl.navigateRoot("/conductor",{animated:!0})}));var e={oferta:t.oferta.oferta,lugar:"aceptar oferta de pasajero"};JSON.stringify({mensaje:"Un conductor a aceptado su oferta y esta a la espera de su confirmaci\xf3n",titulo:"Oferta Aceptada",idSignal:t.oferta.usuario.idSignal}),JSON.stringify(e)}}]});case 2:return e=o.sent,o.next=5,e.present();case 5:case"end":return o.stop()}}),o,this)})))}},{key:"chat",value:function(){return Object(c.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function o(){var e;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return"2"===this.desde&&(this.idConductorOfertaPasajero=this.oferta.completa.idConductorOfertaPasajero),o.next=3,this.modalCtrl.create({component:b.a,componentProps:{idOferta:this.idConductorOfertaPasajero,nombre:this.oferta.usuario.nombre}});case 3:return e=o.sent,o.next=6,e.present();case 6:case"end":return o.stop()}}),o,this)})))}},{key:"calificar",value:function(){return Object(c.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function o(){var e;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,this.modalCtrl.create({component:f.a,componentProps:{conductor:!1,cod:this.oferta.usuario.idUsuario}});case 2:return e=o.sent,o.next=5,e.present();case 5:return o.next=7,e.onDidDismiss();case 7:case"end":return o.stop()}}),o,this)})))}}]),o}(),X.\u0275fac=function(o){return new(o||X)(s.Kb(i.a),s.Kb(l.a),s.Kb(r.b),s.Kb(r.ab),s.Kb(r.bb),s.Kb(u.a))},X.\u0275cmp=s.Eb({type:X,selectors:[["app-ver-oferta-conductor-pasajero"]],decls:10,vars:1,consts:[["color","#f77708"],["slot","start"],["defaultHref","/conductor"],["slot","end",1,"imagenIco"],["src","./assets/imagenes/logo1.png"],[4,"ngIf"],["size","12",1,"aling-center"],["color","primary"],["size","4"],[3,"src"],["size","8"],["size","6"],["expand","block","shape","round",3,"disabled","click"],["size","8",4,"ngIf"],["name","checkmark-outline"],[1,"color-text"],["name","auto",3,"ngModel","ngModelChange"],["slot","start",3,"value"],["slot","start",3,"ngModel","ngModelChange"],["type","number","placeholder","Digite su contraoferta",3,"ngModel","ngModelChange"],["size","12"],["expand","full","shape","round",3,"disabled","click"],["expand","full","shape","round",3,"click"]],template:function(o,e){1&o&&(s.Nb(0,"ion-header"),s.Nb(1,"ion-toolbar",0),s.Nb(2,"ion-buttons",1),s.Lb(3,"ion-back-button",2),s.Mb(),s.Nb(4,"ion-title"),s.mc(5,"Oferta Pasajero"),s.Mb(),s.Nb(6,"ion-buttons",3),s.Lb(7,"img",4),s.Mb(),s.Mb(),s.Mb(),s.Nb(8,"ion-content"),s.lc(9,P,46,18,"ion-grid",5),s.Mb()),2&o&&(s.Ab(9),s.cc("ngIf",e.oferta))},directives:[r.q,r.W,r.i,r.f,r.g,r.V,r.n,a.k,r.p,r.K,r.m,r.U,r.A,r.e,r.h,r.r,r.B,r.G,r.gb,n.c,n.f,r.w,r.F,r.eb,r.v,r.cb],styles:[".color-text[_ngcontent-%COMP%]{color:red;font-style:italic}"]}),X)}],K=((S=function o(){_classCallCheck(this,o)}).\u0275mod=s.Ib({type:S}),S.\u0275inj=s.Hb({factory:function(o){return new(o||S)},imports:[[i.i.forChild(R)],i.i]}),S),L=((_=function o(){_classCallCheck(this,o)}).\u0275mod=s.Ib({type:_}),_.\u0275inj=s.Hb({factory:function(o){return new(o||_)},imports:[[a.c,n.a,r.X,K]]}),_)}}]);