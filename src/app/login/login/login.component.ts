import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() logeadoEmitter = new EventEmitter<boolean>();
  
  public logeado = true;

  constructor() { }
  
  ngOnInit() {
  }

  emit(){
    this.logeadoEmitter.emit(this.logeado);
  }

}
