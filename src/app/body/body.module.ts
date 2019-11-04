import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyRoutingModule } from './body-routing.module';
import { FlyerComponent } from './flyer/flyer.component';
import { HomeComponent } from './home/home.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { NavComponent } from './nav/nav.component';
import { CarruselComponent } from '../carrusel/carrusel.component';
import { CardComponent } from '../card/card.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { InfoComponent } from './info/info.component';


@NgModule({
  declarations: [
    FlyerComponent,
    HomeComponent, 
    PeliculasComponent,
    CarruselComponent,
    CardComponent, 
    NavComponent, 
    InfoComponent
  ],
  imports: [
    CommonModule,
    BodyRoutingModule,
    CarouselModule.forRoot(),
  ],
  exports:[
    NavComponent
  ]
})
export class BodyModule { }
