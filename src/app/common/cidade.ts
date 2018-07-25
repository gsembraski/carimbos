export class Cidade {

  static fromObject(object: any): Cidade {
    const cidade = Object.create(Cidade.prototype);
    Object.assign(cidade, object);
    return cidade;
}

  constructor(public id: number,
        public nome: string,
        public estado_id: number
    ) {}
}
