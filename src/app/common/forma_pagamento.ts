import { Pedidos } from './pedidos';

// tslint:disable-next-line:class-name
export class Forma_pagamento {

  static fromObject(object: any): Forma_pagamento {
    const forma_pagamento = Object.create(Forma_pagamento.prototype);
    Object.assign(forma_pagamento, object);
    return forma_pagamento;
}

  constructor(public id: number,
        public nome: string,
        public pedidos?: Pedidos[]
    ) {}
}
