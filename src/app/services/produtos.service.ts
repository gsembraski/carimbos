import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor() { }

  getProduto(){
    return "Maçã";
  }
}
