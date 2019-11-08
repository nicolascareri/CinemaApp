import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { aLoginComponent } from "./login/login.component";
import { MicuentaComponent } from './micuenta/micuenta.component';


export const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component: aLoginComponent},
  {path: 'inicio', component: BodyComponent},
  {path: 'cuenta', component: MicuentaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
