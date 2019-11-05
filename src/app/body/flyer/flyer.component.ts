import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flyer',
  templateUrl: './flyer.component.html',
  styleUrls: ['./flyer.component.css']
})
export class FlyerComponent implements OnInit {
  @Input() info;
  constructor() { }

  ngOnInit() {
  }

}
