import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
/*Imports dos modulos nativos*/

/*Imports dos modulos locais*/
import { Livros } from './Models/livros';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './views/login/login.component';
import { MenuBarComponent } from './views/menu-bar/menu-bar.component';
import { BannerCarrouselComponent } from './views/banner-carrousel/banner-carrousel.component';
import { CardLivroComponent } from './views/card-livro/card-livro.component';
import { CarrinhoComponent } from './views/carrinho/carrinho.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardLivrosService } from './services/card-livros.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    MenuBarComponent,
    BannerCarrouselComponent,
    CardLivroComponent,
    CarrinhoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    [BrowserAnimationsModule],
  ],
  providers: [Livros,CarrinhoComponent,CardLivrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
