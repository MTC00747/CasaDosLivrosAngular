import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
/*Imports dos modulos nativos*/
/*Imports dos modulos locais*/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './views/login/login.component';
import { MenuBarComponent } from './views/menu-bar/menu-bar.component';
import { BannerCarrouselComponent } from './views/banner-carrousel/banner-carrousel.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    MenuBarComponent,
    BannerCarrouselComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
