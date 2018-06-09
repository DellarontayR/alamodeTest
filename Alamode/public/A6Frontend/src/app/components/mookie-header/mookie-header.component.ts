import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mookie-header',
  templateUrl: './mookie-header.component.html',
  styleUrls: ['./mookie-header.component.scss']
})
export class MookieHeaderComponent implements OnInit {

  constructor() { }

  menuToggleOpen: Boolean = false;

  ngOnInit() {

  }

  openMenuToggle = function(){
    this.menuToggleOpen = !this.menuToggleOpen;
    // if(this.menuToggleOpen) 
  }

}
