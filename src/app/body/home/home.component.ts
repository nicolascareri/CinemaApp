import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  carruseles =[
    {
      "titulo": "Nicolas, ¿Te gustaria continuar alguna de estas?",
      "urls" :[
        [

          "assets/films/dark.jpg",
          "assets/films/dark.jpg",
          "assets/films/dark.jpg",
          "assets/films/mindhunter.jpg",
        ],[
          "assets/films/vikings.jpg",
          "assets/films/vikings.jpg",
          "assets/films/vikings.jpg",
          "assets/films/mindhunter.jpg",
        ],[
          "assets/films/Downton.jpg",
          "assets/films/Downton.jpg",
          "assets/films/Downton.jpg",
          "assets/films/mindhunter.jpg",
        ]
      ],
      seguirviendo:true
    }
  ]
    carrusel =[
      {
        "titulo": "Nicolas, ¿Te gustaria continuar alguna de estas?",
        "urls" :[
            "assets/films/dark.jpg",
            "assets/films/dark.jpg",
            "assets/films/dark.jpg",
            "assets/films/mindhunter.jpg",
         
            "assets/films/vikings.jpg",
            "assets/films/vikings.jpg",
            "assets/films/vikings.jpg",
            "assets/films/mindhunter.jpg",
        
            "assets/films/Downton.jpg",
            "assets/films/Downton.jpg",
            "assets/films/Downton.jpg",
            "assets/films/mindhunter.jpg",
         
        ],
        seguirviendo:true
      }

  ]
  ngOnInit() {
  }

}
