import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from "./login-routing.module";
import { RegistrateComponent } from './registrate/registrate.component';
import { PlanComponent } from './plan/plan.component';
import { LoginComponent } from './login/login.component';
import { PagoComponent } from './pago/pago.component';
import { BotonComponent } from '../boton/boton.component';

@NgModule({
  declarations: [
  PlanComponent,
  LoginComponent,
  PagoComponent,
  RegistrateComponent
],
  imports: [
    CommonModule,
    LoginRoutingModule,
  ]
})
export class LoginModule { }
