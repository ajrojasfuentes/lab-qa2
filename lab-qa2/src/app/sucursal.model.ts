import { Client } from './client.model';

export class Sucursal {
  nombre: string;
  direccion: string;
  clientes: Array<Client>;

  constructor(nombre:string, direccion:string) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.clientes = new Array<Client>();
  }

  getNombre() {
    return this.nombre;
  }

  setNombre(nombre:string) {
    this.nombre = nombre;
  }

  getDireccion() {
    return this.direccion;
  }

  setDireccion(direccion:string) {
    this.direccion = direccion;
  }

  getClientes() {
    return this.clientes;
  }

  setClientes(cliente:Client) {
    this.clientes.push(cliente);
  }
}

