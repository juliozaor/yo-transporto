(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"Lm/C":function(o,e,n){"use strict";n.r(e),n.d(e,"PrincipalPageModule",(function(){return N}));var i=n("ofXK"),t=n("3Pt+"),a=n("TEn/"),r=n("tyNb"),c=n("mrSG"),b=n("fXoL"),s=n("Bfh1"),l=n("w1Bz"),d=n("on2l"),M=n("5egi"),g=n("GWIG");const f=["slides"];function u(o,e){if(1&o&&b.Lb(0,"app-mapa",59),2&o){const o=b.Xb();b.cc("coords",o.coords)}}const h=[{path:"",component:(()=>{class o{constructor(o,e,n,i,t){this.menuCtrl=o,this.geolocation=e,this.ubicacionService=n,this.usuarioService=i,this.ui=t,this.componentes=[],this.tipo=1,this.ofertaCiudad={origen:"",destino:"",tarifa:"",comentarios:"",aire:"false",musica:"false",asientos:"false",maleta:"false",codTipoServicio:"1"},this.ofertaEnvio={destino:"",tarifa:"",comentarios:"",cantBolsas:"-4Bolsas",peso_kilos:"-100",origen:"",codTipoServicio:"3"},this.ofertaInter={destino:"",tarifa:"",comentarios:"",pasajeros:"",aire:"false",musica:"false",asientos:"false",maleta:"false",origen:"",fecha:"",codTipoServicio:"2"},this.ofertaMercancia={destino:"",tarifa:"",comentarios:"",origen:"",peso:"",fecha:"",codTipoServicio:"4"}}ngOnInit(){this.geolocation.getCurrentPosition().then(o=>Object(c.__awaiter)(this,void 0,void 0,(function*(){this.coords=yield`${o.coords.latitude},${o.coords.longitude}`}))).catch(o=>{console.log("Error getting location",o)})}ionViewDidEnter(){this.direccion=this.ubicacionService.getDireccion()}toggleMenu(){this.menuCtrl.toggle()}ciudad(){this.slides.lockSwipes(!1),this.slides.slideTo(0),this.slides.lockSwipes(!0),this.tipo=1}mensajeria(){this.slides.lockSwipes(!1),this.slides.slideTo(1),this.slides.lockSwipes(!0),this.tipo=3}interurbano(){this.slides.lockSwipes(!1),this.slides.slideTo(2),this.slides.lockSwipes(!0),this.tipo=2}mercancia(){this.slides.lockSwipes(!1),this.slides.slideTo(3),this.slides.lockSwipes(!0),this.tipo=4}solicitarServicio(){this.convertirMayusculas(),1===this.tipo?this.generar(this.ofertaCiudad):2===this.tipo?this.generar(this.ofertaInter):3===this.tipo?this.generar(this.ofertaEnvio):4===this.tipo&&this.generar(this.ofertaMercancia)}generar(o){return Object(c.__awaiter)(this,void 0,void 0,(function*(){yield this.usuarioService.crearOfertaPasajero(o).then(o=>{this.ui.alertaInformativa('Su oferta fue generada exitosamente, puede ver el estado de su oferta en el men\xfa "Mis Ofertas"'),this.borrar()})}))}convertirMayusculas(){return Object(c.__awaiter)(this,void 0,void 0,(function*(){this.ofertaCiudad.destino=this.ofertaCiudad.destino.toUpperCase(),this.ofertaEnvio.destino=this.ofertaEnvio.destino.toUpperCase(),this.ofertaEnvio.origen=this.ofertaEnvio.origen.toUpperCase(),this.ofertaInter.destino=this.ofertaInter.destino.toUpperCase(),this.ofertaInter.origen=this.ofertaInter.origen.toUpperCase(),this.ofertaMercancia.destino=this.ofertaMercancia.destino.toUpperCase(),this.ofertaMercancia.origen=this.ofertaMercancia.origen.toUpperCase()}))}borrar(){this.ofertaCiudad={origen:"",destino:"",tarifa:"",comentarios:"",aire:"false",musica:"false",asientos:"false",maleta:"false",codTipoServicio:"1"},this.ofertaEnvio={destino:"",tarifa:"",comentarios:"",cantBolsas:"-4Bolsas",peso_kilos:"-100",origen:"",codTipoServicio:"3"},this.ofertaInter={destino:"",tarifa:"",comentarios:"",pasajeros:"",aire:"false",musica:"false",asientos:"false",maleta:"false",origen:"",fecha:"",codTipoServicio:"2"},this.ofertaMercancia={destino:"",tarifa:"",comentarios:"",origen:"",peso:"",fecha:"",codTipoServicio:"4"}}}return o.\u0275fac=function(e){return new(e||o)(b.Kb(a.Z),b.Kb(s.a),b.Kb(l.a),b.Kb(d.a),b.Kb(M.a))},o.\u0275cmp=b.Eb({type:o,selectors:[["app-principal"]],viewQuery:function(o,e){var n;1&o&&b.qc(f,!0),2&o&&b.gc(n=b.Wb())&&(e.slides=n.first)},decls:199,vars:31,consts:[[1,"ion-no-border"],["color","#f77708"],["slot","start",3,"click"],["menu","primerMenu","color","#ffffff"],["slot","end",1,"imagenIco"],["src","./assets/imagenes/logo1.png"],[1,"ion-padding"],["lugar","principal",3,"coords",4,"ngIf"],["fixed",""],["color","primary",1,"aling-center"],[2,"font-family","Poppins Bold"],["size","12","size-lg","3","size-md","3","size-sm","3","size-xs","3",1,"distancia"],[1,"redondear"],["src","./assets/imagenes/ciudad.png",3,"click"],["src","./assets/imagenes/domicilios.png",3,"click"],["src","./assets/imagenes/inter_urbano.png",3,"click"],["src","./assets/imagenes/camion.png",3,"click"],["mode","ios","pager","false","scrollbar","ios"],["slides",""],[1,"aling-left"],["size","12"],["type","text","placeholder","Origen","name","c-origen",3,"ngModel","ngModelChange"],["slot","start","name","location",1,"colorIcono"],["type","text","placeholder","Destino","name","c-destino",3,"ngModel","ngModelChange"],["slot","start","name","enter",1,"colorIcono"],["type","text","placeholder","Ofrezca su tarifa","name","c-tarifa",3,"ngModel","ngModelChange"],["slot","start","name","cash",1,"colorIcono"],["type","text","placeholder","Comentarios","multiline","true","name","c-comentario",1,"texto-normal",3,"ngModel","ngModelChange"],["slot","start","name","chatbubble-ellipses",1,"colorIcono"],["color","primary"],["mode","ios",3,"ngModel","ngModelChange"],["size","6"],["interface","popover","placeholder","Cantidad de Bolsas",3,"ngModel","ngModelChange"],["value","-4Bolsas"],["value","+4Bolsas"],["interface","popover","placeholder","Peso/kilos",3,"ngModel","ngModelChange"],["value","-100"],["value","+100-200"],["value","+200-300"],["value","+300-400"],["type","text","placeholder","Recogida","name","e-recogida",3,"ngModel","ngModelChange"],["type","text","placeholder","Destino","name","e-destino",3,"ngModel","ngModelChange"],["type","text","placeholder","Ofrezca su tarifa","name","e-tarifa",3,"ngModel","ngModelChange"],["type","text","placeholder","Comentarios","multiline","true","name","e-comentario",1,"texto-normal",3,"ngModel","ngModelChange"],["type","text","placeholder","Origen","name","i-origen",3,"ngModel","ngModelChange"],["type","text","placeholder","Destino","name","i-destino",3,"ngModel","ngModelChange"],["type","date","placeholder","Fecha Prevista","name","i-fecha",3,"ngModel","ngModelChange"],["slot","start","name","calendar",1,"colorIcono"],["type","text","placeholder","Cantidad de pasajeros","name","i-pasajeros",3,"ngModel","ngModelChange"],["slot","start","name","people",1,"colorIcono"],["type","text","placeholder","Ofrezca su tarifa","name","i-tarifa",3,"ngModel","ngModelChange"],["type","text","placeholder","Origen","name","m-origen",3,"ngModel","ngModelChange"],["type","text","placeholder","Destino","name","m-destino",3,"ngModel","ngModelChange"],["type","date","name","m-fecha",3,"ngModel","ngModelChange"],["type","text","placeholder","Peso de la mercancia","name","m-peso",3,"ngModel","ngModelChange"],["slot","start","name","barbell",1,"colorIcono"],["type","text","placeholder","Ofrezca su tarifa","name","m-tarifa",3,"ngModel","ngModelChange"],["type","text","placeholder","Descripci\xf3n de la mercancia","multiline","true","name","m-comentario",1,"texto-normal",3,"ngModel","ngModelChange"],["expand","block","shape","round",3,"click"],["lugar","principal",3,"coords"]],template:function(o,e){1&o&&(b.Nb(0,"ion-header",0),b.Nb(1,"ion-toolbar",1),b.Nb(2,"ion-buttons",2),b.Vb("click",(function(){return e.toggleMenu()})),b.Lb(3,"ion-menu-button",3),b.Mb(),b.Nb(4,"ion-title"),b.mc(5,"T\xfa pides"),b.Mb(),b.Nb(6,"ion-buttons",4),b.Lb(7,"img",5),b.Mb(),b.Mb(),b.Mb(),b.Nb(8,"ion-content",6),b.lc(9,u,1,1,"app-mapa",7),b.Nb(10,"ion-grid",8),b.Nb(11,"ion-text",9),b.Nb(12,"h3",10),b.mc(13,"Servicios"),b.Mb(),b.Mb(),b.Nb(14,"ion-text"),b.Nb(15,"h4"),b.mc(16,"Escoja el tipo de servicio que desea recibir"),b.Mb(),b.Mb(),b.Nb(17,"ion-row"),b.Nb(18,"ion-col",11),b.Nb(19,"ion-card",12),b.Nb(20,"ion-img",13),b.Vb("click",(function(){return e.ciudad()})),b.Mb(),b.Mb(),b.Mb(),b.Nb(21,"ion-col",11),b.Nb(22,"ion-card",12),b.Nb(23,"ion-img",14),b.Vb("click",(function(){return e.mensajeria()})),b.Mb(),b.Mb(),b.Mb(),b.Nb(24,"ion-col",11),b.Nb(25,"ion-card",12),b.Nb(26,"ion-img",15),b.Vb("click",(function(){return e.interurbano()})),b.Mb(),b.Mb(),b.Mb(),b.Nb(27,"ion-col",11),b.Nb(28,"ion-card",12),b.Nb(29,"ion-img",16),b.Vb("click",(function(){return e.mercancia()})),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Nb(30,"ion-slides",17,18),b.Nb(32,"ion-slide",19),b.Nb(33,"ion-grid",8),b.Nb(34,"ion-row"),b.Nb(35,"ion-col",20),b.Nb(36,"h3"),b.mc(37,"Ciudad"),b.Mb(),b.Mb(),b.Mb(),b.Nb(38,"ion-row"),b.Nb(39,"ion-col",20),b.Nb(40,"ion-input",21),b.Vb("ngModelChange",(function(o){return e.ofertaCiudad.origen=o})),b.Lb(41,"ion-icon",22),b.Mb(),b.Mb(),b.Mb(),b.Nb(42,"ion-row"),b.Nb(43,"ion-col",20),b.Nb(44,"ion-input",23),b.Vb("ngModelChange",(function(o){return e.ofertaCiudad.destino=o})),b.Lb(45,"ion-icon",24),b.Mb(),b.Mb(),b.Mb(),b.Nb(46,"ion-row"),b.Nb(47,"ion-col",20),b.Nb(48,"ion-input",25),b.Vb("ngModelChange",(function(o){return e.ofertaCiudad.tarifa=o})),b.Lb(49,"ion-icon",26),b.Mb(),b.Mb(),b.Mb(),b.Nb(50,"ion-row"),b.Nb(51,"ion-col",20),b.Nb(52,"ion-input",27),b.Vb("ngModelChange",(function(o){return e.ofertaCiudad.comentarios=o})),b.Lb(53,"ion-icon",28),b.Mb(),b.Mb(),b.Mb(),b.Nb(54,"ion-row"),b.Nb(55,"ion-col",20),b.Nb(56,"ion-label",29),b.mc(57,"Que requiero: "),b.Mb(),b.Nb(58,"ion-item"),b.Nb(59,"ion-label"),b.mc(60,"Aire"),b.Mb(),b.Nb(61,"ion-checkbox",30),b.Vb("ngModelChange",(function(o){return e.ofertaCiudad.aire=o})),b.Mb(),b.Mb(),b.Nb(62,"ion-item"),b.Nb(63,"ion-label"),b.mc(64,"Musica"),b.Mb(),b.Nb(65,"ion-checkbox",30),b.Vb("ngModelChange",(function(o){return e.ofertaCiudad.musica=o})),b.Mb(),b.Mb(),b.Nb(66,"ion-item"),b.Nb(67,"ion-label"),b.mc(68,"Asientos bebes"),b.Mb(),b.Nb(69,"ion-checkbox",30),b.Vb("ngModelChange",(function(o){return e.ofertaCiudad.asientos=o})),b.Mb(),b.Mb(),b.Nb(70,"ion-item"),b.Nb(71,"ion-label"),b.mc(72,"Maletero"),b.Mb(),b.Nb(73,"ion-checkbox",30),b.Vb("ngModelChange",(function(o){return e.ofertaCiudad.maleta=o})),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Nb(74,"ion-slide",19),b.Nb(75,"ion-grid",8),b.Nb(76,"ion-row"),b.Nb(77,"ion-col",20),b.Nb(78,"h3"),b.mc(79,"Domicilios"),b.Mb(),b.Mb(),b.Mb(),b.Nb(80,"ion-row"),b.Nb(81,"ion-col",31),b.Nb(82,"ion-label"),b.mc(83,"cant. bolsa"),b.Mb(),b.Nb(84,"ion-select",32),b.Vb("ngModelChange",(function(o){return e.ofertaEnvio.cantBolsas=o})),b.Nb(85,"ion-select-option",33),b.mc(86,"-4 Bolsas"),b.Mb(),b.Nb(87,"ion-select-option",34),b.mc(88,"+4 Bolsas"),b.Mb(),b.Mb(),b.Mb(),b.Nb(89,"ion-col",31),b.Nb(90,"ion-label"),b.mc(91,"Peso. Kg"),b.Mb(),b.Nb(92,"ion-select",35),b.Vb("ngModelChange",(function(o){return e.ofertaEnvio.peso_kilos=o})),b.Nb(93,"ion-select-option",36),b.mc(94,"- 100"),b.Mb(),b.Nb(95,"ion-select-option",37),b.mc(96,"+100 -200"),b.Mb(),b.Nb(97,"ion-select-option",38),b.mc(98,"+200 -300"),b.Mb(),b.Nb(99,"ion-select-option",39),b.mc(100,"+300 -400"),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Nb(101,"ion-row"),b.Nb(102,"ion-col",20),b.Nb(103,"ion-input",40),b.Vb("ngModelChange",(function(o){return e.ofertaEnvio.origen=o})),b.Lb(104,"ion-icon",22),b.Mb(),b.Mb(),b.Mb(),b.Nb(105,"ion-row"),b.Nb(106,"ion-col",20),b.Nb(107,"ion-input",41),b.Vb("ngModelChange",(function(o){return e.ofertaEnvio.destino=o})),b.Lb(108,"ion-icon",24),b.Mb(),b.Mb(),b.Mb(),b.Nb(109,"ion-row"),b.Nb(110,"ion-col",20),b.Nb(111,"ion-input",42),b.Vb("ngModelChange",(function(o){return e.ofertaEnvio.tarifa=o})),b.Lb(112,"ion-icon",26),b.Mb(),b.Mb(),b.Mb(),b.Nb(113,"ion-row"),b.Nb(114,"ion-col",20),b.Nb(115,"ion-input",43),b.Vb("ngModelChange",(function(o){return e.ofertaEnvio.comentarios=o})),b.Lb(116,"ion-icon",28),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Nb(117,"ion-slide",19),b.Nb(118,"ion-grid",8),b.Nb(119,"ion-row"),b.Nb(120,"ion-col",20),b.Nb(121,"h3"),b.mc(122,"Inter Urbano"),b.Mb(),b.Mb(),b.Mb(),b.Nb(123,"ion-row"),b.Nb(124,"ion-col",20),b.Nb(125,"ion-input",44),b.Vb("ngModelChange",(function(o){return e.ofertaInter.origen=o})),b.Lb(126,"ion-icon",22),b.Mb(),b.Mb(),b.Mb(),b.Nb(127,"ion-row"),b.Nb(128,"ion-col",20),b.Nb(129,"ion-input",45),b.Vb("ngModelChange",(function(o){return e.ofertaInter.destino=o})),b.Lb(130,"ion-icon",24),b.Mb(),b.Mb(),b.Mb(),b.Nb(131,"ion-row"),b.Nb(132,"ion-col",20),b.Nb(133,"ion-input",46),b.Vb("ngModelChange",(function(o){return e.ofertaInter.fecha=o})),b.Lb(134,"ion-icon",47),b.Mb(),b.Mb(),b.Mb(),b.Nb(135,"ion-row"),b.Nb(136,"ion-col",20),b.Nb(137,"ion-input",48),b.Vb("ngModelChange",(function(o){return e.ofertaInter.pasajeros=o})),b.Lb(138,"ion-icon",49),b.Mb(),b.Mb(),b.Mb(),b.Nb(139,"ion-row"),b.Nb(140,"ion-col",20),b.Nb(141,"ion-input",50),b.Vb("ngModelChange",(function(o){return e.ofertaInter.tarifa=o})),b.Lb(142,"ion-icon",26),b.Mb(),b.Mb(),b.Mb(),b.Nb(143,"ion-row"),b.Nb(144,"ion-col",20),b.Nb(145,"ion-input",27),b.Vb("ngModelChange",(function(o){return e.ofertaInter.comentarios=o})),b.Lb(146,"ion-icon",28),b.Mb(),b.Mb(),b.Mb(),b.Nb(147,"ion-row"),b.Nb(148,"ion-col",20),b.Nb(149,"ion-label",29),b.mc(150,"Que requiero: "),b.Mb(),b.Nb(151,"ion-item"),b.Nb(152,"ion-label"),b.mc(153,"Aire"),b.Mb(),b.Nb(154,"ion-checkbox",30),b.Vb("ngModelChange",(function(o){return e.ofertaInter.aire=o})),b.Mb(),b.Mb(),b.Nb(155,"ion-item"),b.Nb(156,"ion-label"),b.mc(157,"Musica"),b.Mb(),b.Nb(158,"ion-checkbox",30),b.Vb("ngModelChange",(function(o){return e.ofertaInter.musica=o})),b.Mb(),b.Mb(),b.Nb(159,"ion-item"),b.Nb(160,"ion-label"),b.mc(161,"Asientos bebes"),b.Mb(),b.Nb(162,"ion-checkbox",30),b.Vb("ngModelChange",(function(o){return e.ofertaInter.asientos=o})),b.Mb(),b.Mb(),b.Nb(163,"ion-item"),b.Nb(164,"ion-label"),b.mc(165,"Maletero"),b.Mb(),b.Nb(166,"ion-checkbox",30),b.Vb("ngModelChange",(function(o){return e.ofertaInter.maleta=o})),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Nb(167,"ion-slide",19),b.Nb(168,"ion-grid",8),b.Nb(169,"ion-row"),b.Nb(170,"ion-col",20),b.Nb(171,"h3"),b.mc(172,"Mercancia"),b.Mb(),b.Mb(),b.Mb(),b.Nb(173,"ion-row"),b.Nb(174,"ion-col",20),b.Nb(175,"ion-input",51),b.Vb("ngModelChange",(function(o){return e.ofertaMercancia.origen=o})),b.Lb(176,"ion-icon",22),b.Mb(),b.Mb(),b.Mb(),b.Nb(177,"ion-row"),b.Nb(178,"ion-col",20),b.Nb(179,"ion-input",52),b.Vb("ngModelChange",(function(o){return e.ofertaMercancia.destino=o})),b.Lb(180,"ion-icon",24),b.Mb(),b.Mb(),b.Mb(),b.Nb(181,"ion-row"),b.Nb(182,"ion-col",20),b.Nb(183,"ion-input",53),b.Vb("ngModelChange",(function(o){return e.ofertaMercancia.fecha=o})),b.Lb(184,"ion-icon",47),b.Mb(),b.Mb(),b.Mb(),b.Nb(185,"ion-row"),b.Nb(186,"ion-col",20),b.Nb(187,"ion-input",54),b.Vb("ngModelChange",(function(o){return e.ofertaMercancia.peso=o})),b.Lb(188,"ion-icon",55),b.Mb(),b.Mb(),b.Mb(),b.Nb(189,"ion-row"),b.Nb(190,"ion-col",20),b.Nb(191,"ion-input",56),b.Vb("ngModelChange",(function(o){return e.ofertaMercancia.tarifa=o})),b.Lb(192,"ion-icon",26),b.Mb(),b.Mb(),b.Mb(),b.Nb(193,"ion-row"),b.Nb(194,"ion-col",20),b.Nb(195,"ion-input",57),b.Vb("ngModelChange",(function(o){return e.ofertaMercancia.comentarios=o})),b.Lb(196,"ion-icon",28),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Nb(197,"ion-button",58),b.Vb("click",(function(){return e.solicitarServicio()})),b.mc(198," Solicitud de servicio "),b.Mb(),b.Mb()),2&o&&(b.Ab(9),b.cc("ngIf",e.coords),b.Ab(31),b.cc("ngModel",e.ofertaCiudad.origen),b.Ab(4),b.cc("ngModel",e.ofertaCiudad.destino),b.Ab(4),b.cc("ngModel",e.ofertaCiudad.tarifa),b.Ab(4),b.cc("ngModel",e.ofertaCiudad.comentarios),b.Ab(9),b.cc("ngModel",e.ofertaCiudad.aire),b.Ab(4),b.cc("ngModel",e.ofertaCiudad.musica),b.Ab(4),b.cc("ngModel",e.ofertaCiudad.asientos),b.Ab(4),b.cc("ngModel",e.ofertaCiudad.maleta),b.Ab(11),b.cc("ngModel",e.ofertaEnvio.cantBolsas),b.Ab(8),b.cc("ngModel",e.ofertaEnvio.peso_kilos),b.Ab(11),b.cc("ngModel",e.ofertaEnvio.origen),b.Ab(4),b.cc("ngModel",e.ofertaEnvio.destino),b.Ab(4),b.cc("ngModel",e.ofertaEnvio.tarifa),b.Ab(4),b.cc("ngModel",e.ofertaEnvio.comentarios),b.Ab(10),b.cc("ngModel",e.ofertaInter.origen),b.Ab(4),b.cc("ngModel",e.ofertaInter.destino),b.Ab(4),b.cc("ngModel",e.ofertaInter.fecha),b.Ab(4),b.cc("ngModel",e.ofertaInter.pasajeros),b.Ab(4),b.cc("ngModel",e.ofertaInter.tarifa),b.Ab(4),b.cc("ngModel",e.ofertaInter.comentarios),b.Ab(9),b.cc("ngModel",e.ofertaInter.aire),b.Ab(4),b.cc("ngModel",e.ofertaInter.musica),b.Ab(4),b.cc("ngModel",e.ofertaInter.asientos),b.Ab(4),b.cc("ngModel",e.ofertaInter.maleta),b.Ab(9),b.cc("ngModel",e.ofertaMercancia.origen),b.Ab(4),b.cc("ngModel",e.ofertaMercancia.destino),b.Ab(4),b.cc("ngModel",e.ofertaMercancia.fecha),b.Ab(4),b.cc("ngModel",e.ofertaMercancia.peso),b.Ab(4),b.cc("ngModel",e.ofertaMercancia.tarifa),b.Ab(4),b.cc("ngModel",e.ofertaMercancia.comentarios))},directives:[a.q,a.W,a.i,a.D,a.V,a.n,i.k,a.p,a.U,a.K,a.m,a.j,a.s,a.Q,a.P,a.v,a.hb,t.c,t.f,a.r,a.A,a.w,a.k,a.c,a.N,a.gb,a.O,a.h,g.a],styles:[".top-100[_ngcontent-%COMP%]{margin-top:100px}.color-blanco[_ngcontent-%COMP%]{background-color:#fff}ion-select[_ngcontent-%COMP%]{width:100%;justify-content:left}ion-select[_ngcontent-%COMP%]::part(placeholder), ion-select[_ngcontent-%COMP%]::part(text){flex:0 0 auto}.redondear[_ngcontent-%COMP%]{border-radius:20%;border-color:180}.texto-normal[_ngcontent-%COMP%]{text-transform:none}.distancia[_ngcontent-%COMP%]{padding-left:0;padding-right:0;margin-left:0;margin-right:0}"]}),o})()}];let p=(()=>{class o{}return o.\u0275mod=b.Ib({type:o}),o.\u0275inj=b.Hb({factory:function(e){return new(e||o)},imports:[[r.i.forChild(h)],r.i]}),o})();var m=n("j1ZV");let N=(()=>{class o{}return o.\u0275mod=b.Ib({type:o}),o.\u0275inj=b.Hb({factory:function(e){return new(e||o)},imports:[[i.c,t.a,a.X,m.a,p]]}),o})()}}]);