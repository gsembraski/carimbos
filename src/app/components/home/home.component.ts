import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itemValue = '';
  items: Observable<any[]>;

  constructor(public db: AngularFireDatabase,
              private produtoService: ProdutoService) {
    this.items = produtoService.getProdutosOfEstabelecimento();
  }

  onSubmit() {
    this.db.list('/produto').push({ nome: this.itemValue,
                                    descricao: 'teste',
                                    preco: 25.00 });
    this.itemValue = '';
  }

  ngOnInit() {
  }

}
