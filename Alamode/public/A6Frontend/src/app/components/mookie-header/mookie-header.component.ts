import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-mookie-header',
  templateUrl: './mookie-header.component.html',
  styleUrls: ['./mookie-header.component.scss']
})
export class MookieHeaderComponent implements OnInit {

  constructor(private shared: SharedService) { }

  menuToggleOpen: Boolean = false;
  loggedIn: Boolean = false;

  ngOnInit() {
    this.loggedIn = false;
    this.loggedIn = this.shared.getSharedVar('loggedIn');

  }

  openMenuToggle = function(){
    this.menuToggleOpen = !this.menuToggleOpen;
		$('body').toggleClass('no-scroll-body');
    // if(this.menuToggleOpen) 
  }

}
