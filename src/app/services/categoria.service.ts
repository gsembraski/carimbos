import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Categoria } from '../common/categoria';

@Injectable()
export class CategoriaService {

  constructor(private db: AngularFirestore) { }

  getCategorias(): Observable<Categoria[]> {
    return this.db.collection('categoria')
      .valueChanges().pipe(
      map((categorias) => categorias.map(categoria => {
        return Categoria.fromObject(categoria);
      })));
  }
}
