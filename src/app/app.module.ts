import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule, MatCardModule, MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

import { AppRouting } from './app-routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { CategoriaComponent } from './components/categoria/categoria.component';

import { ProdutoService } from './services/produto.service';
import { CategoriaService } from './services/categoria.service';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    SobreComponent,
    ProdutoComponent,
    CategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database,
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [
    { provide: LocationStrategy,
    useClass: HashLocationStrategy },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    ProdutoService,
    CategoriaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
