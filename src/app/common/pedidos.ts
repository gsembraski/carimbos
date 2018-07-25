import { Produto } from './produto';
export class Pedidos {

  static fromObject(object: any): Pedidos {
    const pedidos = Object.create(Pedidos.prototype);
    Object.assign(pedidos, object);
    return pedidos;
}

  constructor(public id: number,
    public nome: string,
    public status: string,
    public usuario_id: number,
    public forma_pagamento_id: number,
    public produtos?: Produto[]
  ) {}
}
