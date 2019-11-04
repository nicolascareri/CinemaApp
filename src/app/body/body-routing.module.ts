import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { BodyComponent } from './body.component';
import { InfoComponent } from './info/info.component';


const routes: Routes = [
  { path: 'inicio', component: BodyComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'peliculas', component: PeliculasComponent},
    {path: 'info', component: InfoComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodyRoutingModule { }
