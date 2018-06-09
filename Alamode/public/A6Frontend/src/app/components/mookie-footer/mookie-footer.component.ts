import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-mookie-footer',
  templateUrl: './mookie-footer.component.html',
  styleUrls: ['./mookie-footer.component.scss']
})
export class MookieFooterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  numberOfSiteVisitors = 0;



  ngOnInit() {
    this.numberOfSiteVisitors = 0;

    // Get total number of siteVisitors
    this.authService.getSiteVisitors().subscribe(siteData => {
      if (siteData.success) {
        this.numberOfSiteVisitors = siteData.numberOfSiteVisitors;
      }
    });
  }

}
