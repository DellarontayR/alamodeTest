import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from '../../services/shared.service';


@Component({
  selector: 'app-mookie-home',
  templateUrl: './mookie-home.component.html',
  styleUrls: ['./mookie-home.component.scss']
})
export class MookieHomeComponent implements OnInit {

  images: Array<string>;
  loggedIn: Boolean;

  constructor(private shared: SharedService) { }

  ngOnInit() {
    this.images = new Array<string>();
    this.loggedIn = false;

    this.images.push('assets/imgs/rontay.jpg');
    this.images.push('assets/imgs/bempah-opt.jpg');
    this.images.push('assets/imgs/olu.jpg');
    this.images.push('assets/imgs/akim.jpg');

    this.loggedIn = this.shared.getSharedVar('loggedIn');


  }

}
