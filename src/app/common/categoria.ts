import { Produto } from './produto';
export class Categoria {

  static fromObject(object: any): Categoria {
    const categoria = Object.create(Categoria.prototype);
    Object.assign(categoria, object);
    return categoria;
}

  constructor(public id: number,
        public nome: string,
        public produtos?: Produto[]
    ) {}
}
