export class Imagem {

  static fromObject(object: any): Imagem {
    const imagem = Object.create(Imagem.prototype);
    Object.assign(imagem, object);
    return imagem;
}

  constructor(public id: number,
        public imagem: string,
        public descricao: string,
        public produto_id: number
    ) {}
}
