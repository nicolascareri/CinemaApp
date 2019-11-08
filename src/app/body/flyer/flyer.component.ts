import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flyer',
  templateUrl: './flyer.component.html',
  styleUrls: ['./flyer.component.css']
})
export class FlyerComponent implements OnInit {
  @Input() info;
  open = false
  
  constructor() {
   
   }
   temporadas ={
      "titulo": "Capitulos",
      "urls" :[
        [
          "assets/temporadas/2.jpeg",
          "assets/temporadas/descarga.jpg",
          "assets/temporadas/3.jpg",
          "assets/temporadas/4.jpg",
        ],[
          "assets/temporadas/4.jpg",
          "assets/temporadas/2.jpg",
          "assets/temporadas/3.jpg",
          "assets/temporadas/2.jpeg",
        ],[
          "assets/temporadas/2.jpg",
          "assets/temporadas/2.jpeg",
          "assets/temporadas/4.jpg",
          "assets/temporadas/3.jpg",
        ]
      ],
      seguirviendo: false
    }
  toggleVideo(){
    let video = document.getElementById("video") as HTMLElement;
    video.style.transition = "all 2s";
    video.style.display= "block";
    video.style.height = "100%";
    video.style.transform = "traslate(0, -50px);"
    let cerrar = document.getElementById("cerrar");
    cerrar.style.display = "block";
    
    // let ventana = document.getElementById("ventana") as HTMLElement;
    // ventana.classList.remove("d-none");
    // cerrar.classList.remove("d-none");
    // cerrar.classList.add("d-flex", "justify-self-end", "align-self-start", "boton");
    cerrar.addEventListener("click", function(){
          video.style.display = "none";
    });

  }
  on() {
    let div = document.getElementById("comment") as HTMLElement
      div.style.display = "block";
  }
  off(){
    let div = document.getElementById("comment") as HTMLElement
    div.style.display = "none";
  }
  public ngOnInit(){

  }

}
