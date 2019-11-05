import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  informacion = true;

  constructor() { }
  carruseles =[
    {
      "titulo": "Nicolas, ¿Te gustaria continuar alguna de estas?",
      "urls" :[
        [
          "assets/films/dark.jpg",
          "assets/films/vikings.jpg",
          "assets/films/mindhunter.jpg",
          "assets/films/Downton.jpg",
        ],[
          "assets/films/avengers.png",
          "assets/films/aladin.jpg",
          "assets/films/alita.jpg",
          "assets/films/skyfall.jpg",
        ],[
          "assets/films/war.jpg",
          "assets/films/toystory.jpg",
          "assets/films/joker.jpg",
          "assets/films/mindhunter.jpg",
        ]
      ],
      seguirviendo:true
    }
  ]
  ngOnInit() {
  }

}
