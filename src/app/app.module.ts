import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { aLoginComponent } from "./login/login.component";
import { LoginModule } from './login/login.module';
import { BodyModule } from './body/body.module';

@NgModule({
  declarations: [
    aLoginComponent,
    AppComponent,
    BodyComponent,
    FooterComponent,
  ],
  imports: [
    LoginModule,
    BodyModule,
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
