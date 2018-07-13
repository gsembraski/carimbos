import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../services/produtos.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  //Variáveis
  produto: string;

  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.produto = this.produtosService.getProduto();
  }

}
