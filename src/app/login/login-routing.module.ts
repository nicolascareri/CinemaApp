import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrateComponent } from './registrate/registrate.component';
import { CardComponent } from '../card/card.component';


const routes: Routes = [
  { path: '', component: RegistrateComponent, children: [
    {path: '/Registrate', component: CardComponent},
    {path: '**', component: RegistrateComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }