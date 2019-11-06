import { Component, OnInit,  Input  } from '@angular/core';
@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {
  constructor() { }
  @Input() carrusel: {
    titulo: String,
    urls: [[],[],[]],
    seguirviendo: boolean
  };
  @Input() car: {};

  public ngOnInit(){
  
  }
}
