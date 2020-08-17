
  export interface Usuario {
    idUsuario?: string;
    cedula?: string;
    nombre?: string;
    email?: string;
    password?: string;
    telefono?: string;
    foto?: string;
    idSignal?: string;
  }

  export interface Conductor {
    idConductor?: string;
    licencia?: string;
    foto1Licencia?: string;
    foto2Licencia?: string;
    ciudad?: string;
    direccion?: string;
    codTipoVehiculo?: string;
    estado?: boolean;
  }

  export interface UsuarioConductor {
    idConductor?: string;
    licencia?: string;
    foto1Licencia?: string;
    foto2Licencia?: string;
    ciudad?: string;
    direccion?: string;
    codTipoVehiculo?: string;
    estado?: boolean;
    usuario?: Usuario;
  }

  export interface Vehiculo {
    idVehiculo?: string;
    modelo?: string;
    placa?: string;
    foto1?: string;
    foto2?: string;
    foto3?: string;
    foto4?: string;
    foto5?: string;
    numeroSoat?: string;
    foto1Soat?: string;
    foto2Soat?: string;
    numeroTP?: string;
    foto1TP?: string;
    foto2TP?: string;
    codPropietario?: string;
    codTipoVehiculo?: string;
  }

  export interface Componente {
    icon?: string;
    name?: string;
    redirectTo?: string;
  }

  export interface IntOfertaUsuario {
    idOferta?: string;
    usuario?: string;
    origen?: string;
    destino?: string;
    idServicio?: string;
    valor?: string;
    cometarios?: string;
    coords?: string;
  }

  export interface OfertaConductor {
    idOfertaConductor?: string;
    codVehiculo?: string;
    comentarios?: string;
    fecha_salida?: string;
    hora_salida?: string;
    origen?: string;
    destino?: string;
    tarifa?: string;
    cantPasajeros?: string;
    capacidadCarga?: string;
    paqueteriaMensajeria?: string;
    terminada?: boolean;
    codTipoServicio?: string;
    codConductor?: string;
  }

  export interface OfertaConductorCompleta {
    length: number;
    oferta?: OfertaConductor;
    usuario?: Usuario;
    conductor?: Conductor;
  }

  export interface IntMensaje {
    nombre?: string;
    mensaje?: string;
    fecha?: number;
    uid?: string;
  }

  export interface RespuestaConductor {
    ok: boolean;
    conductor: Conductor;
    mensaje: string;
  }

  export interface RespuestaUsuario {
    ok: boolean;
    conductor: Usuario;
  }



  export interface RespuestaOfertaConductor {
  ok: boolean;
  ofertas: OfertaConductorCompleta;
}

  export interface OfertasArregloC {
    count: number;
    rows: OfertaConductor[];
  }



