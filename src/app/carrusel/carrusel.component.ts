import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
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
    // "assets/films/peaky.jpg",
    // "assets/films/vikings.jpg",
    // "assets/films/Downton.jpg"
]
  carruseles =[
    {
      "titulo": "Nicolas, ¿Te gustaria continuar alguna de estas?",
      "urls" :[
          "assets/films/dark.jpg",
          "assets/films/vikings.jpg",
          "assets/films/Downton.jpg",
          "assets/films/mindhunter.jpg",
          // "assets/films/peaky.jpg",
          // "assets/films/vikings.jpg",
          // "assets/films/Downton.jpg"
      ],
      seguirviendo:true
    },
    {
      "titulo": "O, ¿Te gustaria comenzar algo de tu lista?",
      "urls" :[
        "assets/films/carta.jpg",
        "assets/films/descarga (4).jpg",
        "assets/films/dark.jpg",
        "assets/films/mindhunter.jpg",
        "assets/films/vikings.jpg",
        "assets/films/Downton.jpg",
          "assets/films/vikings.jpg"
      ],
      seguirviendo:false
    }
  ]

  public ngOnInit()
  {
   
  }
}
