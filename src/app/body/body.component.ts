import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  urls=[
    "assets/films/dark.jpg",
    "assets/films/vikings.jpg"
    
  ]

  ngOnInit() {
  }

}
