export class Produto {

  static fromObject(object: any): Produto {
    const produto = Object.create(Produto.prototype);
    Object.assign(produto, object);
    return produto;
}

  constructor(public id: number,
        public nome: string,
        public descricao?: string,
        public imagem?: string,
        public preco?: number,
        public categoria_id?: number,
        public cor_id?: number
    ) {}
}
