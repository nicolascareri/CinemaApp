import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { aLoginComponent } from "./login/login.component";
import { LoginModule } from './login/login.module';
import { BodyModule } from './body/body.module';
import { MicuentaComponent } from './micuenta/micuenta.component';
import { MicuentaModule } from './micuenta/micuenta.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    MicuentaComponent,
    aLoginComponent,
    AppComponent,
    BodyComponent,
    FooterComponent,
  ],
  imports: [
    LoginModule,
    MicuentaModule,
    BodyModule,
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
