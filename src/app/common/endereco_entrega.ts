export class Endereco_entrega {

  static fromObject(object: any): Endereco_entrega {
    const endereco_entrega = Object.create(Endereco_entrega.prototype);
    Object.assign(endereco_entrega, object);
    return endereco_entrega;
}

  constructor(public id: number,
        public rua: string,
        public numero: string,
        public complemento: string,
        public cep: string,
        public usuario_id: number,
        public cidade_id: number
    ) {}
}
