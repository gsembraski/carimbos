import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private meta: Meta) {
    this.meta.addTags([{ charset: 'UTF-8'},
                       { name: 'viewport', content: 'width=device-width, initial-scale=1'},
                       { name: 'title', content: 'CARIMBOS CURITIBA AQUI'},
                       { httpEquiv: 'X-UA-Compatible', content: 'IE=edge,chrome=1'},
                       // tslint:disable-next-line:max-line-length
                       { name: 'description', content: 'CARIMBOS CURITIBA. AV. VISCONDE DE GUARAPUAVA, 3067 - LOJA 04 / AO LADO DA MATERNIDADE NOSSA SENHORA DE FÁTIMA.'},
                       // tslint:disable-next-line:max-line-length
                       { name: 'keywords', content: 'carimbos em curitiba, carimbos automaticos, carimbos personalizados, carimbos na hora, carimbos de madeira, carimbos urgente,Enviamos para todo Parana'},
                       { name: 'author', content: 'Mateus Henrique Gonçalves'},
                       { name: 'author', content: 'Geovana Sembraski Nocera'},
                       { name: 'language', content: 'Portuguese'},
                       { name: 'robots', content: 'index,follow'},
                       { name: 'Googlebot', content: 'index,follow'}
                      ]);
  }
}
