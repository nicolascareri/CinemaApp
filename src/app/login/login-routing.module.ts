import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrateComponent } from './registrate/registrate.component';
import { PlanComponent } from './plan/plan.component';
import { PagoComponent } from './pago/pago.component';
import { aLoginComponent } from "./login.component";


const rout: Routes = [
  { path: 'login', component: aLoginComponent, children: [
     {path: '', component: LoginComponent},
    {path: 'Registrate', component:RegistrateComponent},
    {path: 'plan', component: PlanComponent},
    {path: 'pago', component: PagoComponent},
    {path: '**', component: RegistrateComponent},
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(rout)],
  exports: [RouterModule]
})
export class LoginRoutingModule{}