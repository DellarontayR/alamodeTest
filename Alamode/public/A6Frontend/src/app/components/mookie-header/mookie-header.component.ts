import { Component, OnInit, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import { SharedService } from '../../services/shared.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-mookie-header',
  templateUrl: './mookie-header.component.html',
  styleUrls: ['./mookie-header.component.scss']
})
export class MookieHeaderComponent implements OnInit, AfterViewInit {

  constructor(private shared: SharedService, private changeDetector: ChangeDetectorRef) { }

  menuToggleOpen: Boolean = false;
  loggedIn: Boolean = false;
  cartItemCount: Number = 0;
  ngOnInit() {
    this.loggedIn = false;
    this.cartItemCount = 0;
    this.loggedIn = this.shared.getSharedVar('loggedIn');

  }

  ngAfterViewInit(){
    this.cartItemCount = this.shared.getSharedVar('cartItemCount');
    this.changeDetector.detectChanges();

  }

  toggleMenu = function(){
    this.menuToggleOpen = !this.menuToggleOpen;
		$('body').toggleClass('no-scroll-body');
    // if(this.menuToggleOpen) 
  };

  closeMenu = function(){
    if(this.menuToggleOpen){
      this.menuToggleOpen = !this.menuToggleOpen;
      $('body').toggleClass('no-scroll-body');
    }
  };

}
