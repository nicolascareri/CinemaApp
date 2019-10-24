import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';


export const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'inicio', component: BodyComponent},
  {path: '**', component: BodyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }