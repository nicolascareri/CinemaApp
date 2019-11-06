import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flyer',
  templateUrl: './flyer.component.html',
  styleUrls: ['./flyer.component.css']
})
export class FlyerComponent implements OnInit {
  @Input() info;
  
  constructor() {
   
   }
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
  toggleVideo(){
    let video = document.getElementById("video") as HTMLElement;
    video.classList.add("pelicula");
    video.classList.remove("d-none");
    
    let ventana = document.getElementById("ventana") as HTMLElement;
    ventana.classList.remove("d-none");
    let cerrar = document.getElementById("cerrar");
    cerrar.classList.remove("d-none");
    cerrar.classList.add("d-flex", "justify-self-end", "align-self-start", "boton");
    cerrar.addEventListener("click", function(){
  
    });

  }
  public ngOnInit(){

  }

}
