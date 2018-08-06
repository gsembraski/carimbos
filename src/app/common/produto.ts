export class Produto {

  static fromObject(object: any): Produto {
    const produto = Object.create(Produto.prototype);
    Object.assign(produto, object);
    return produto;
}

  constructor(public id: number,
        public nome: string,
        public descricao?: string,
        public valor?: number,
        public categoria_id?: number,
        public cores?: {
            cor_id: number}[],
        public imagem?: string
    ) {}
}
