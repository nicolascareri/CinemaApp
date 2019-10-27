import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { CardComponent } from './card/card.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { aLoginComponent } from "./login/login.component";
import { FlyerComponent } from './body/flyer/flyer.component';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    aLoginComponent,
    AppComponent,
    NavComponent,
    BodyComponent,
    FooterComponent,
    CardComponent,
    CarruselComponent,
    FlyerComponent,
  ],
  imports: [
    LoginModule,
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
