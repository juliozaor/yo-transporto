import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsuarioGuard } from './guards/usuario.guard';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'principal'
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/seleccionar-registro/seleccionar-registro.module').then( m => m.SeleccionarRegistroPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'ver-oferta/:from',
    loadChildren: () => import('./pages/ver-oferta/ver-oferta.module').then( m => m.VerOfertaPageModule)
  },
  {
    path: 'generar-oferta',
    loadChildren: () => import('./pages/generar-oferta/generar-oferta.module').then( m => m.GenerarOfertaPageModule)
  },
  {
    path: 'vehiculo/:id',
    loadChildren: () => import('./pages/vehiculo/vehiculo.module').then( m => m.VehiculoPageModule)
  },
  {
    path: 'registroConductor',
    loadChildren: () => import('./pages/registro-conductor/registro-conductor.module').then( m => m.RegistroConductorPageModule)
  },
  {
    path: 'conductor',
    loadChildren: () => import('./pages/conductor/conductor.module').then( m => m.ConductorPageModule)
  },
  {
    path: 'chats/:idOferta',
    loadChildren: () => import('./pages/chats/chats.module').then( m => m.ChatsPageModule)
  },
  {
    path: 'ver-oferta-usuario/:id',
    loadChildren: () => import('./pages/ver-oferta-usuario/ver-oferta-usuario.module').then( m => m.VerOfertaUsuarioPageModule)
  },
  {
    path: 'ver-lista-ofertas',
    loadChildren: () => import('./pages/ver-lista-ofertas/ver-lista-ofertas.module').then( m => m.VerListaOfertasPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./pages/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'ofertas-conductor/:idTipoOferta',
    loadChildren: () => import('./pages/ofertas-conductor/ofertas-conductor.module').then( m => m.OfertasConductorPageModule)
  },
  {
    path: 'ver-oferta-conductor',
    loadChildren: () => import('./pages/ver-oferta-conductor/ver-oferta-conductor.module').then( m => m.VerOfertaConductorPageModule),
    canLoad: [ UsuarioGuard ]
  },
  {
    path: 'ofertas-pasajero',
    loadChildren: () => import('./pages/ofertas-pasajero/ofertas-pasajero.module').then( m => m.OfertasPasajeroPageModule)
  },
  {
    path: 'ver-oferta-conductor-pasajero/:from',
    // tslint:disable-next-line: max-line-length
    loadChildren: () => import('./pages/ver-oferta-conductor-pasajero/ver-oferta-conductor-pasajero.module').
    then( m => m.VerOfertaConductorPasajeroPageModule)
  },
  {
    path: 'ver-oferta-pasajero',
    loadChildren: () => import('./pages/ver-oferta-pasajero/ver-oferta-pasajero.module').then( m => m.VerOfertaPasajeroPageModule)
  },
  {
    path: 'modal-calificacion',
    loadChildren: () => import('./pages/modal-calificacion/modal-calificacion.module').then( m => m.ModalCalificacionPageModule)
  },
  {
    path: 'seguimiento',
    loadChildren: () => import('./pages/seguimiento/seguimiento.module').then( m => m.SeguimientoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
