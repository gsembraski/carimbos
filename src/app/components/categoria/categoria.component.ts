import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../common/categoria';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  itens: Observable<Categoria[]>;

  constructor(private categoriaService: CategoriaService) {
    this.itens = categoriaService.getCategorias();
  }

  ngOnInit() {
  }

}
