import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  items: Observable<any[]>;

  constructor(private produtoService: ProdutoService) {
    this.items = produtoService.getProdutosOfEstabelecimento(); 
  }

  ngOnInit() {
  }

}
