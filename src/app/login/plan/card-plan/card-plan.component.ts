import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-plan',
  templateUrl: './card-plan.component.html',
  styleUrls: ['./card-plan.component.css']
})
export class CardPlanComponent implements OnInit {
  @Input() plan: string;
  @Input() descargas:string;
  @Input() pantallas:string;
  @Input() precio:string;
  constructor() { }

  ngOnInit() {
  }

}
