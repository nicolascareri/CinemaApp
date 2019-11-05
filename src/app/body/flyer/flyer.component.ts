import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flyer',
  templateUrl: './flyer.component.html',
  styleUrls: ['./flyer.component.css']
})
export class FlyerComponent implements OnInit {

  constructor() { }

  toggleVideo(){
    let video = document.getElementById("video") as HTMLElement;
    video.style.height = "100%";
  }
  public ngOnInit(){
    
  }

}
