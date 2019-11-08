import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public open: Boolean = false;
  @Input() logeado;

  constructor() {
   }

  ngOnInit() {
  }
  toggleOverlay() {
    let sidenav = document.getElementsByClassName("sidenav")[0] as HTMLElement;
    let menu = document.getElementById("buttonsidenav") as HTMLElement;
    if(!this.open){
      sidenav.style.width = "250px";
      sidenav.style.display = "block";
      this.open = true;
      menu.style.display = "none";
    }
    else{
      sidenav.style.width = "0px";
      this.open = false;
      menu.style.display = "block";
    }
  }
  openSearch() {
    let div = document.getElementById("myOverlay") as HTMLElement;
    div.style.display = "block";
  }
  closeSearch() {
    let div = document.getElementById("myOverlay") as HTMLElement;
    div.style.display = "none";
  }

  @HostListener('document:wheel', ['$event.target'])
  public onWheel() {
    let nav = document.getElementById("navbar") as HTMLElement;
    if (window.pageYOffset > nav.clientHeight) {
      // console.log(window.pageYOffset);
      // console.log(nav.clientHeight);
      nav.style.backgroundColor = "black";
    } else {
      nav.style.background = "rgba(0, 0, 0, 0.3)";
    }
  }
}
