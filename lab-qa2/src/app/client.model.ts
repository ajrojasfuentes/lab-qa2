import { Count } from './count';

export class Client {
  nombre: string;
  apellidos: string;
  fechaNacimiento: string;
  telefono: string;
  direccion: string;
  correo: string;
  cuentas: Array<Count>;
  constructor(nombre:string, apellidos:string, fechaNacimiento:string, telefono:string, direccion:string, correo:string) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fechaNacimiento = fechaNacimiento;
    this.telefono = telefono;
    this.direccion = direccion;
    this.correo = correo;
    this.cuentas = new Array<Count>();
  }

  getNombre() {
    return this.nombre;
  }

  setNombre(nombre:string) {
    this.nombre = nombre;
  }

  getApellidos() {
    return this.apellidos;
  }

  setApellidos(apellidos:string) {
    this.apellidos = apellidos;
  }

  getFechaNacimiento() {
    return this.fechaNacimiento;
  }

  setFechaNacimiento(fechaNacimiento:string) {
    this.fechaNacimiento = fechaNacimiento;
  }

  getTelefono() {
    return this.telefono;
  }

  setTelefono(telefono:string) {
    this.telefono = telefono;
  }

  getDireccion() {
    return this.direccion;
  }

  setDireccion(direccion:string) {
    this.direccion = direccion;
  }

  getCorreo() {
    return this.correo;
  }

  setCorreo(correo:string) {
    this.correo = correo;
  }

  getCuentas():Count[] {
    return this.cuentas;
  }

  setCuentas(cuenta:Count):void {
    this.cuentas.push(cuenta);
  }

  buscarCuenta(numeroCuenta:number) {
    for (var i = 0; i < this.cuentas.length; i++) {
      var cuenta = this.cuentas[i];
      if (cuenta.getNumCuenta() === numeroCuenta) {
        return cuenta;
      }
    }
    return null;
  }

  retirar(amount:number, numeroCuenta:number) {
    var account = this.buscarCuenta(numeroCuenta);
    if (account != null) {
      var balance = account.getCantidadDinero();
      if (amount >= 0) {
        if (balance < amount) {
          throw new Error("Fondos insuficientes");
        }
        return account.retirar(amount);
      }
      else {
        throw new Error("Valor negativo");
      }
    }
    return -1;
  }

  public liquidarCuenta(cuenta: Count): void {
    // Buscamos la cuenta en la lista de cuentas del cliente
    const index = this.cuentas.indexOf(cuenta);

    // Si la cuenta existe, la removemos
    if (index > -1) {
      this.cuentas.splice(index, 1);
    } else {
      throw new Error("La cuenta no existe en el cliente");
    }
  }

}

