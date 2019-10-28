import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  logeado = false;

  planes=[
    {
      "titulo":"Bronce",
      "descargas":"Sin descargas",
      "pantallas":"Pantallas 1",
      "precio":"$60"
    },{
      "titulo":"Plata",
      "descargas":"Descargas",
      "pantallas":"Pantallas 2",
      "precio":"$120"
    },{
      "titulo":"Oro",
      "descargas":"Descargas",
      "pantallas":"Pantallas 5",
      "precio":"$140"
    },{
      "titulo":"Diamante",
      "descargas":"Descargas",
      "pantallas":"Pantallas ilimitadas",
      "precio":"$150"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
