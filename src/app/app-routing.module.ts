import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './login/login.component';
import { RegistrateComponent } from './login/registrate/registrate.component';


export const routes: Routes = [
  {path: '', component: RegistrateComponent},
  {path: 'login', component: LoginComponent},
  {path: 'inicio', component: BodyComponent},
  {path: '**', component: BodyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }