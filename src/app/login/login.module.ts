import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from "./login-routing.module";
import { RegistrateComponent } from './registrate/registrate.component';
import { PlanComponent } from './plan/plan.component';
import { LoginComponent } from './login/login.component';
import { PagoComponent } from './pago/pago.component';
import { CardPlanComponent } from './plan/card-plan/card-plan.component';
import { NavComponent } from '../body/nav/nav.component';
import { BodyModule } from '../body/body.module';


@NgModule({
  declarations: [
  PlanComponent,
  LoginComponent,
  PagoComponent,  
  RegistrateComponent, CardPlanComponent],
  imports: [
    BodyModule,
    CommonModule,
    LoginRoutingModule,
  ]
})
export class LoginModule { }
