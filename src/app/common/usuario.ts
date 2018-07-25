import { Pedidos } from "./pedidos";
import { Endereco_entrega } from "./endereco_entrega";

export class Usuario {

    static fromObject(object: any): Usuario {
      const usuario = Object.create(Usuario.prototype);
      Object.assign(usuario, object);
      return usuario;
  }
  
    constructor(public id: number,
          public nome: string,
          public email: string,
          public senha: string,
          public telefone: string,
          public pedidos?: Pedidos[],
          public endereco_entrega_list?: Endereco_entrega[]
      ) {}
  }