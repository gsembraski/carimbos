import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Produto } from '../common/produto';

@Injectable()
export class ProdutoService {

  constructor(private db: AngularFirestore) { }

  getProdutosOfEstabelecimento(): Observable<Produto[]> {
    return this.db.collection('produto')
      .valueChanges().pipe(
      map((produtos) => produtos.map(produto => {
        return Produto.fromObject(produto);
      })));
  }
}
