import { Component, OnInit } from '@angular/core';
import { MookiePressService } from '../../services/mookie-press.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MookieModalComponent } from '../mookie-modal/mookie-modal.component';

@Component({
  selector: 'app-mookie-press',
  templateUrl: './mookie-press.component.html',
  styleUrls: ['./mookie-press.component.scss']
})
export class MookiePressComponent implements OnInit {

  prs: [any] = null;
  constructor(private pressService:MookiePressService, private modalService:NgbModal) { }

  ngOnInit() {
    this.pressService.getPRs().subscribe(data=>{
      if(data.success){
        this.prs = data.prs;
        // show user error
        
      }
      else{
        const modalRef = this.modalService.open(MookieModalComponent);
        modalRef.componentInstance.modalTitle = "We're sorry it looks like there are some issues here";
        modalRef.componentInstance.modalBody = "Please try to look at our press release page later ";
      }
    });
  }

}
