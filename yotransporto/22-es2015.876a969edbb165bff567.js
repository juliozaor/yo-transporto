(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{HRn4:function(t,o,i){"use strict";i.r(o),i.d(o,"OfertasConductorPageModule",(function(){return p}));var e=i("ofXK"),r=i("3Pt+"),n=i("TEn/"),a=i("tyNb"),s=i("mrSG"),c=i("fXoL"),b=i("on2l");const l=["refresh"];function f(t,o){if(1&t){const t=c.Ob();c.Nb(0,"ion-list",null,11),c.Nb(2,"ion-item",12),c.Vb("click",(function(){c.ic(t);const i=o.$implicit;return c.Xb(2).verOfertaConductor(i)})),c.Nb(3,"ion-label"),c.Nb(4,"h1"),c.mc(5),c.Mb(),c.Nb(6,"p"),c.mc(7),c.Mb(),c.Nb(8,"p"),c.mc(9),c.Mb(),c.Nb(10,"p"),c.mc(11),c.Mb(),c.Nb(12,"p",13),c.mc(13),c.Mb(),c.Mb(),c.Mb(),c.Mb()}if(2&t){const t=o.$implicit;c.Ab(5),c.oc("Conductor: ",t.usuario.nombre,""),c.Ab(2),c.oc("Origen: ",t.oferta.origen,""),c.Ab(2),c.oc("Destino: ",t.oferta.destino,""),c.Ab(2),c.oc("Comentarios: ",t.oferta.comentarios,""),c.Ab(2),c.oc("$: ",t.oferta.tarifa,"")}}function u(t,o){if(1&t&&(c.Nb(0,"ion-row"),c.Nb(1,"ion-col",9),c.lc(2,f,14,5,"ion-list",10),c.Mb(),c.Mb()),2&t){const t=c.Xb();c.Ab(2),c.cc("ngForOf",t.ofertasCompletas)}}const d=[{path:"",component:(()=>{class t{constructor(t,o,i,e){this.activatedRoute=t,this.usuarioService=o,this.navCtrl=i,this.menuCtrl=e,this.ofertasCompletas=[],this.habilitado=!0}ngOnInit(){this.usuarioService.getUsuarioToken().then(t=>Object(s.__awaiter)(this,void 0,void 0,(function*(){this.usuario=yield t,yield this.cargarOfertas(!1)})))}cargarOfertas(t,o=!1){return Object(s.__awaiter)(this,void 0,void 0,(function*(){this.idTipoOferta=yield this.activatedRoute.snapshot.paramMap.get("idTipoOferta"),yield this.usuarioService.ofertasConductor(this.idTipoOferta,o).subscribe(o=>{this.ofertasCompletas.push(...o.ofertas),t&&(console.log("entro al si",o.ofertas.length),t.target.complete(),0===o.ofertas.length&&(this.habilitado=!1))})}))}recargar(t){this.ofertasCompletas=[],this.cargarOfertas(t,!0),this.habilitado=!0}toggleMenu(){this.menuCtrl.toggle()}verOfertaConductor(t){this.usuarioService.ofertaConductor=t,this.navCtrl.navigateRoot("/ver-oferta/1",{animated:!0})}favorite(){}share(){}borrar(){}}return t.\u0275fac=function(o){return new(o||t)(c.Kb(a.a),c.Kb(b.a),c.Kb(n.cb),c.Kb(n.ab))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-ofertas-conductor"]],viewQuery:function(t,o){var i;1&t&&c.qc(l,!0),2&t&&c.gc(i=c.Wb())&&(o.refresh=i.first)},decls:14,vars:2,consts:[["color","#f77708"],["slot","start",3,"click"],["menu","primerMenu","color","primary"],[1,"ion-padding"],["slot","fixed","pullFactor","0.8","pullMin","60","pullMax","120",3,"ionRefresh"],["refresh",""],["fixed",""],[4,"ngIf"],["threshold","150px","position","bottom",3,"disabled","ionInfinite"],["size","12"],[4,"ngFor","ngForOf"],["lista",""],["color","medium",3,"click"],[1,"ion-text-right"]],template:function(t,o){1&t&&(c.Nb(0,"ion-header"),c.Nb(1,"ion-toolbar",0),c.Nb(2,"ion-buttons",1),c.Vb("click",(function(){return o.toggleMenu()})),c.Lb(3,"ion-menu-button",2),c.Mb(),c.Nb(4,"ion-title"),c.mc(5,"Ofertas Conductor"),c.Mb(),c.Mb(),c.Mb(),c.Nb(6,"ion-content",3),c.Nb(7,"ion-refresher",4,5),c.Vb("ionRefresh",(function(t){return o.recargar(t)})),c.Lb(9,"ion-refresher-content"),c.Mb(),c.Nb(10,"ion-grid",6),c.lc(11,u,3,1,"ion-row",7),c.Mb(),c.Nb(12,"ion-infinite-scroll",8),c.Vb("ionInfinite",(function(t){return o.cargarOfertas(t)})),c.Lb(13,"ion-infinite-scroll-content"),c.Mb(),c.Mb()),2&t&&(c.Ab(11),c.cc("ngIf",o.ofertasCompletas),c.Ab(1),c.cc("disabled",!o.habilitado))},directives:[n.q,n.X,n.i,n.E,n.W,n.n,n.I,n.J,n.p,e.l,n.t,n.u,n.L,n.m,e.k,n.B,n.w,n.A],styles:[""]}),t})()}];let h=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(o){return new(o||t)},imports:[[a.i.forChild(d)],a.i]}),t})(),p=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(o){return new(o||t)},imports:[[e.c,r.a,n.Y,h]]}),t})()}}]);