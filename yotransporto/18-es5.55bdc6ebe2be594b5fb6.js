function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var o=0;o<e.length;o++){var t=e[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,e,o){return e&&_defineProperties(n.prototype,e),o&&_defineProperties(n,o),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{jjCu:function(n,e,o){"use strict";o.r(e),o.d(e,"ConfiguracionPageModule",(function(){return h}));var t,i,r,c=o("ofXK"),u=o("3Pt+"),a=o("TEn/"),l=o("tyNb"),s=o("fXoL"),b=o("on2l"),f=[{path:"",component:(t=function(){function n(e,o){_classCallCheck(this,n),this.usuarioService=e,this.menuCtrl=o}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"logout",value:function(){this.usuarioService.logout()}},{key:"toggleMenu",value:function(){this.menuCtrl.toggle()}}]),n}(),t.\u0275fac=function(n){return new(n||t)(s.Kb(b.a),s.Kb(a.ab))},t.\u0275cmp=s.Eb({type:t,selectors:[["app-configuracion"]],decls:12,vars:0,consts:[["color","#f77708"],["slot","start",3,"click"],["menu","primerMenu","color","primary"],["fixed",""],["size","12"],["expand","block","fill","clear","shape","round",3,"click"]],template:function(n,e){1&n&&(s.Nb(0,"ion-header"),s.Nb(1,"ion-toolbar",0),s.Nb(2,"ion-buttons",1),s.Vb("click",(function(){return e.toggleMenu()})),s.Lb(3,"ion-menu-button",2),s.Mb(),s.Nb(4,"ion-title"),s.mc(5,"configuraci\xf3n"),s.Mb(),s.Mb(),s.Mb(),s.Nb(6,"ion-content"),s.Nb(7,"ion-grid",3),s.Nb(8,"ion-row"),s.Nb(9,"ion-col",4),s.Nb(10,"ion-button",5),s.Vb("click",(function(){return e.logout()})),s.mc(11," Cerrar Sesi\xf3n "),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb())},directives:[a.q,a.X,a.i,a.E,a.W,a.n,a.p,a.L,a.m,a.h],styles:[""]}),t)}],p=((r=function n(){_classCallCheck(this,n)}).\u0275mod=s.Ib({type:r}),r.\u0275inj=s.Hb({factory:function(n){return new(n||r)},imports:[[l.i.forChild(f)],l.i]}),r),h=((i=function n(){_classCallCheck(this,n)}).\u0275mod=s.Ib({type:i}),i.\u0275inj=s.Hb({factory:function(n){return new(n||i)},imports:[[c.c,u.a,a.Y,p]]}),i)}}]);