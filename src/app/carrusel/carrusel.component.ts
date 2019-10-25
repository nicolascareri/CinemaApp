import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  constructor() { }
  urls=[
    "assets/films/dark.jpg",
    "assets/films/vikings.jpg",
    "assets/films/Downton.jpg",
    "assets/films/mindhunter.jpg",
    "assets/films/peaky.jpg",
    "assets/films/vikings.jpg",
    "assets/films/Downton.jpg"
    
  ]
  ngOnInit() {
  }

}
