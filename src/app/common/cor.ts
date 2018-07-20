import { Produto } from './produto';
export class Cor {

  static fromObject(object: any): Cor {
    const cor = Object.create(Cor.prototype);
    Object.assign(cor, object);
    return cor;
}

  constructor(public id: number,
        public nome: string,
        public produtos?: Produto[]
    ) {}
}
