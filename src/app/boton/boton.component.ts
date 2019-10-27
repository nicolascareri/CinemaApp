import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {
  @Input()  txt:string;
  @Input() style:string;
  constructor() { }

  ngOnInit() {
  }

}
