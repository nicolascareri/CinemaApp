import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from "./login-routing.module";
import { RegistrateComponent } from './registrate/registrate.component';
import { PlanComponent } from './plan/plan.component';
import { LoginComponent } from './login/login.component';
import { PagoComponent } from './pago/pago.component';
import { CardPlanComponent } from './plan/card-plan/card-plan.component';


@NgModule({
  declarations: [
  PlanComponent,
  LoginComponent,
  PagoComponent,  
  RegistrateComponent, CardPlanComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
  ]
})
export class LoginModule { }
