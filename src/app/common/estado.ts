import { Cidade } from "./cidade";

export class Estado {

  static fromObject(object: any): Estado {
    const estado = Object.create(Estado.prototype);
    Object.assign(estado, object);
    return estado;
}

  constructor(public id: number,
    public nome: string,
    public sigla: string,
    public cidades?: Cidade[]
    ) {}
}
