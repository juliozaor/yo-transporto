(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"3eMV":function(t,n,e){"use strict";e.d(n,"a",(function(){return d}));var o=e("mrSG"),i=e("tk/3"),r=e("AytR"),s=e("fXoL"),c=e("e8h1"),a=e("on2l"),l=e("B7Rs");const u=r.a.url;let d=(()=>{class t{constructor(t,n,e,o){this.http=t,this.storage=n,this.usuarioService=e,this.fileTransfer=o,this.v=[]}subirArchivos(t,n){const e={fileKey:"imagen",headers:{"x-token":this.usuarioService.token}};this.fileTransfer.create().upload(t,`${u}/vehiculo/upload/${n}`,e).then(t=>{console.log(t)}).catch(t=>{console.error("error al cargar",t)})}registroVehiculo(t){const n=new i.c({"x-token":this.usuarioService.token});return new Promise(e=>Object(o.__awaiter)(this,void 0,void 0,(function*(){yield this.http.post(`${u}/vehiculo/create/`,t,{headers:n}).subscribe(t=>Object(o.__awaiter)(this,void 0,void 0,(function*(){console.log(t),this.vehiculo=t.vehiculo,e(!!t.ok)})))})))}registroConductorvehiculo(){const t=new i.c({"x-token":this.usuarioService.token}),n=this.usuarioService.getUsuario();console.log("Estos son los datos del vehiculo",this.vehiculo);const e={codVehiculo:this.vehiculo.idVehiculo,codConductor:n.idUsuario};return new Promise(n=>Object(o.__awaiter)(this,void 0,void 0,(function*(){yield this.http.post(`${u}/conductor/conductor-vehiculo`,e,{headers:t}).subscribe(t=>Object(o.__awaiter)(this,void 0,void 0,(function*(){n(!!t.ok)})))})))}buscarVehiculo(t){return new Promise(n=>{this.http.get(`${u}/vehiculo/buscarVehiculo/${t}`).subscribe(t=>Object(o.__awaiter)(this,void 0,void 0,(function*(){t.ok?(this.v.push(t.vehiculos),n(!0)):n(!1)})))})}}return t.\u0275fac=function(n){return new(n||t)(s.Rb(i.a),s.Rb(c.b),s.Rb(a.a),s.Rb(l.a))},t.\u0275prov=s.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"5egi":function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var o=e("mrSG"),i=e("fXoL"),r=e("TEn/");let s=(()=>{class t{constructor(t,n){this.alertController=t,this.toastController=n}alertaInformativa(t){return Object(o.__awaiter)(this,void 0,void 0,(function*(){const n=yield this.alertController.create({message:t,buttons:["OK"]});yield n.present()}))}presentToast(t){return Object(o.__awaiter)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:t,position:"top",duration:1500})).present()}))}}return t.\u0275fac=function(n){return new(n||t)(i.Rb(r.b),i.Rb(r.jb))},t.\u0275prov=i.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"6i10":function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));const o={bubbles:{dur:1e3,circles:9,fn:(t,n,e)=>{const o=`${t*n/e-t}ms`,i=2*Math.PI*n/e;return{r:5,style:{top:`${9*Math.sin(i)}px`,left:`${9*Math.cos(i)}px`,"animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(t,n,e)=>{const o=n/e,i=`${t*o-t}ms`,r=2*Math.PI*o;return{r:5,style:{top:`${9*Math.sin(r)}px`,left:`${9*Math.cos(r)}px`,"animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,n)=>({r:6,style:{left:`${9-9*n}px`,"animation-delay":-110*n+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,n,e)=>({y1:17,y2:29,style:{transform:`rotate(${30*n+(n<6?180:-180)}deg)`,"animation-delay":`${t*n/e-t}ms`}})},"lines-small":{dur:1e3,lines:12,fn:(t,n,e)=>({y1:12,y2:20,style:{transform:`rotate(${30*n+(n<6?180:-180)}deg)`,"animation-delay":`${t*n/e-t}ms`}})}}},GWIG:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var o=e("fXoL"),i=e("tk/3"),r=e("w1Bz");const s=["mapa"];let c=(()=>{class t{constructor(t,n){this.http=t,this.ubicacionService=n}ngOnInit(){let t,n,e,o,i,r,s,c,a;if("principal"===this.lugar||"conductor"===this.lugar?(t=this.coords.split(","),n=Number(t[0]),e=Number(t[1])):"oferta"===this.lugar&&(t=this.coords.split(","),n=Number(t[0]),e=Number(t[1]),o=this.origen.split(","),i=Number(o[0]),r=Number(o[1]),s=this.destino.split(","),c=Number(s[0]),a=Number(s[1])),mapboxgl.accessToken="pk.eyJ1IjoiemFvciIsImEiOiJja2Jqd3RodDAwdGlyMzBvZHUwM3N6NWtrIn0.AeiL56UBu8MiFEpuusJO6Q",this.http.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${e},\n                  ${n}.json?access_token=${mapboxgl.accessToken}`).subscribe(t=>{this.ubicacionService.setCiudad(t.features[1].text),this.ubicacionService.setDireccion(t.features[0].text)}),"principal"===this.lugar){console.log("Mostrar principal");const t=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/streets-v11",center:[e,n],zoom:15});(new mapboxgl.Marker).setLngLat([e,n]).addTo(t)}else if("conductor"===this.lugar){console.log("Mostrar conductor");const t=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/streets-v11",center:[e,n],zoom:15});(new mapboxgl.Marker).setLngLat([e,n]).addTo(t)}else if("oferta"===this.lugar){console.log("mostrar mapa oferta");const t=new MapboxDirections({accessToken:mapboxgl.accessToken,unit:"metric",profile:"mapbox/cycling",interactive:!1,controls:{inputs:!1,instructions:!1,profileSwitcher:!1}}),o=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/streets-v11",zoom:15});o.addControl(t,"top-left"),o.on("load",(function(){t.setOrigin([r,i]),t.setDestination([a,c])})),(new mapboxgl.Marker).setLngLat([e,n]).addTo(o)}}obtenerLugar(){console.log()}}return t.\u0275fac=function(n){return new(n||t)(o.Kb(i.a),o.Kb(r.a))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-mapa"]],viewQuery:function(t,n){var e;1&t&&o.qc(s,!0),2&t&&o.gc(e=o.Wb())&&(n.mapa=e.first)},inputs:{coords:"coords",origen:"origen",destino:"destino",lugar:"lugar"},decls:2,vars:0,consts:[["id","map"],["mapa",""]],template:function(t,n){1&t&&o.Lb(0,"div",0,1)},styles:["#map[_ngcontent-%COMP%]{width:100%;height:300px}"]}),t})()},KwJk:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return o})),e.d(n,"d",(function(){return c}));const o=(t,n)=>null!==n.closest(t),i=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,[`ion-color-${t}`]:!0}:void 0,r=t=>{const n={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>n[t]=!0),n},s=/^[a-z][a-z0-9+\-.]*:/,c=async(t,n,e)=>{if(null!=t&&"#"!==t[0]&&!s.test(t)){const o=document.querySelector("ion-router");if(o)return null!=n&&n.preventDefault(),o.push(t,e)}return!1}},NqGI:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return i}));const o=async(t,n,e,o,i)=>{if(t)return t.attachViewToDom(n,e,i,o);if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");const r="string"==typeof e?n.ownerDocument&&n.ownerDocument.createElement(e):e;return o&&o.forEach(t=>r.classList.add(t)),i&&Object.assign(r,i),n.appendChild(r),r.componentOnReady&&await r.componentOnReady(),r},i=(t,n)=>{if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},QQAA:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var o=e("fXoL");let i=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Eb({type:t,selectors:[["app-explore-container"]],inputs:{name:"name"},decls:7,vars:1,consts:[["id","container"],["target","_blank","rel","noopener noreferrer","href","https://ionicframework.com/docs/components"]],template:function(t,n){1&t&&(o.Nb(0,"div",0),o.Nb(1,"strong"),o.mc(2),o.Mb(),o.Nb(3,"p"),o.mc(4,"Explore "),o.Nb(5,"a",1),o.mc(6,"UI Components"),o.Mb(),o.Mb(),o.Mb()),2&t&&(o.Ab(2),o.nc(n.name))},styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),t})()},ZJfK:function(t,n,e){"use strict";e.d(n,"a",(function(){return v}));var o=e("fXoL"),i=e("CqG3"),r=e("tyNb"),s=e("TEn/"),c=e("ofXK"),a=e("sjK5"),l=e("on2l"),u=e("3Pt+");const d=["content"];function p(t,n){if(1&t&&(o.Nb(0,"ion-chip",13),o.Nb(1,"ion-label"),o.mc(2),o.Mb(),o.Mb()),2&t){const t=o.Xb().$implicit;o.Ab(2),o.nc(t.nombre)}}function f(t,n){if(1&t&&(o.Nb(0,"ion-chip",14),o.Nb(1,"ion-label"),o.mc(2),o.Mb(),o.Mb()),2&t){const t=o.Xb().$implicit;o.Ab(2),o.nc(t.nombre)}}const b=function(t){return{"aling-right ":t}};function h(t,n){if(1&t&&(o.Nb(0,"ion-row"),o.Nb(1,"ion-col",10),o.lc(2,p,3,1,"ion-chip",11),o.lc(3,f,3,1,"ion-chip",12),o.Nb(4,"p"),o.mc(5),o.Mb(),o.Mb(),o.Mb()),2&t){const t=n.$implicit,e=o.Xb();o.Ab(1),o.cc("ngClass",o.fc(4,b,e.usuario.idUsuario==t.uid)),o.Ab(1),o.cc("ngIf",e.usuario.idUsuario==t.uid),o.Ab(1),o.cc("ngIf",e.usuario.idUsuario!=t.uid),o.Ab(2),o.nc(t.mensaje)}}let m=(()=>{class t{constructor(t,n){this.cs=t,this.usuarioService=n}ngOnInit(){this.cs.cargarMensajes(this.idOferta),this.usuarioService.getUsuarioToken().then(t=>{this.usuario=t}).catch(t=>{console.log(t)})}enviar_mensaje(){0!==this.mensaje.length&&this.cs.agregarMensaje(this.mensaje).then(()=>this.mensaje="").catch(t=>console.error("error al enviar: ",t))}}return t.\u0275fac=function(n){return new(n||t)(o.Kb(a.a),o.Kb(l.a))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-chat"]],viewQuery:function(t,n){var e;1&t&&o.qc(d,!0),2&t&&o.gc(e=o.Wb())&&(n.content=e.first)},inputs:{idOferta:"idOferta"},decls:12,vars:2,consts:[["id","app-mensajes",1,"app-mensajes"],["content",""],[4,"ngFor","ngForOf"],["id","end"],["fixed",""],["size","9"],["type","text","placeholder","Enviar mensaje",3,"ngModel","ngModelChange"],["size","3"],["shape","round",3,"click"],["name","caret-forward-outline"],["size","12",3,"ngClass"],["color","primary","mode","ios","outline","false",4,"ngIf"],["color","warning","mode","ios","outline","true",4,"ngIf"],["color","primary","mode","ios","outline","false"],["color","warning","mode","ios","outline","true"]],template:function(t,n){1&t&&(o.Nb(0,"ion-content",0,1),o.Nb(2,"ion-grid"),o.lc(3,h,6,6,"ion-row",2),o.Lb(4,"ion-row",3),o.Mb(),o.Mb(),o.Nb(5,"ion-grid",4),o.Nb(6,"ion-row"),o.Nb(7,"ion-col",5),o.Nb(8,"ion-input",6),o.Vb("ngModelChange",(function(t){return n.mensaje=t})),o.Mb(),o.Mb(),o.Nb(9,"ion-col",7),o.Nb(10,"ion-button",8),o.Vb("click",(function(){return n.enviar_mensaje()})),o.Lb(11,"ion-icon",9),o.Mb(),o.Mb(),o.Mb(),o.Mb()),2&t&&(o.Ab(3),o.cc("ngForOf",n.cs.chats),o.Ab(5),o.cc("ngModel",n.mensaje))},directives:[s.n,s.p,c.k,s.L,s.m,s.v,s.ib,u.c,u.f,s.h,s.r,c.j,c.l,s.l,s.A],styles:[".main-container[_ngcontent-%COMP%]{margin-top:40px;margin-bottom:150px}.puntero[_ngcontent-%COMP%]{cursor:pointer}.app-mensajes[_ngcontent-%COMP%]{overflow-y:scroll;height:90%;padding:5px}.animated[_ngcontent-%COMP%]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.fast[_ngcontent-%COMP%]{-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-fill-mode:both;animation-fill-mode:both}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.fadeIn[_ngcontent-%COMP%]{-webkit-animation-name:fadeIn;animation-name:fadeIn}.aling-right[_ngcontent-%COMP%]{text-align:right}"]}),t})();function g(t,n){if(1&t&&o.Lb(0,"app-chat",4),2&t){const t=o.Xb();o.cc("idOferta",t.idOferta)}}let v=(()=>{class t{constructor(t,n,e){this.activatedRoute=n,this.modalCtrl=e,this.chats=t.collection(this.idOferta).valueChanges()}salir(){this.modalCtrl.dismiss()}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)(o.Kb(i.AngularFirestore),o.Kb(r.a),o.Kb(s.bb))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-chats"]],inputs:{idOferta:"idOferta",nombre:"nombre"},decls:7,vars:2,consts:[[1,"ion-padding","main-container"],[1,"chat-window"],[3,"idOferta",4,"ngIf"],["expand","full","shape","round",3,"click"],[3,"idOferta"]],template:function(t,n){1&t&&(o.Nb(0,"ion-content",0),o.Nb(1,"h1"),o.mc(2),o.Mb(),o.Nb(3,"ion-grid",1),o.lc(4,g,1,1,"app-chat",2),o.Mb(),o.Nb(5,"ion-button",3),o.Vb("click",(function(){return n.salir()})),o.mc(6," Cerrar chat "),o.Mb(),o.Mb()),2&t&&(o.Ab(2),o.oc("Chat con ",n.nombre,""),o.Ab(2),o.cc("ngIf",n.idOferta))},directives:[s.n,s.p,c.l,s.h,m],styles:[".main-container[_ngcontent-%COMP%]{margin-top:40px;margin-bottom:150px}.puntero[_ngcontent-%COMP%]{cursor:pointer}.app-mensajes[_ngcontent-%COMP%]{overflow-y:scroll;height:270px;padding:5px}.chat-window[_ngcontent-%COMP%]{padding:10px;width:90%;height:70%;overflow:hidden;border:1px solid #4080ff;border-radius:20px}"]}),t})()},qtYk:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var o=e("ofXK"),i=e("3Pt+"),r=e("TEn/"),s=e("fXoL");let c=(()=>{class t{}return t.\u0275mod=s.Ib({type:t}),t.\u0275inj=s.Hb({factory:function(n){return new(n||t)},imports:[[o.c,i.a,r.Y]]}),t})()},w1Bz:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var o=e("fXoL"),i=e("tk/3");let r=(()=>{class t{constructor(t){this.http=t}setCiudad(t){this.ciudad=t}getCiudad(){return this.ciudad}setDireccion(t){this.direccion=t}getDireccion(){return this.direccion}}return t.\u0275fac=function(n){return new(n||t)(o.Rb(i.a))},t.\u0275prov=o.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},xgmX:function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return s})),e.d(n,"d",(function(){return c})),e.d(n,"e",(function(){return i}));const o={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const n=this.getEngine();if(!n)return;const e=this.isCapacitor()?t.style.toUpperCase():t.style;n.impact({style:e})},notification(t){const n=this.getEngine();if(!n)return;const e=this.isCapacitor()?t.style.toUpperCase():t.style;n.notification({style:e})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())}},i=()=>{o.selection()},r=()=>{o.selectionStart()},s=()=>{o.selectionChanged()},c=()=>{o.selectionEnd()},a=t=>{o.impact(t)}}}]);