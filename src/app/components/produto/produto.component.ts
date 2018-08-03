import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Observable } from 'rxjs';
import { Produto } from '../../common/produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  items$: Observable<Produto[]>;

  constructor(private produtoService: ProdutoService) {
    this.items$ = produtoService.getProdutosOfEstabelecimento();
  }

  ngOnInit() {
  }

}
