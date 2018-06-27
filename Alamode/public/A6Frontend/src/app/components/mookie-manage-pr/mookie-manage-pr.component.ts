import { Component, OnInit } from '@angular/core';
import { MookiePressService } from '../../services/mookie-press.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MookieModalComponent } from '../mookie-modal/mookie-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mookie-manage-pr',
  templateUrl: './mookie-manage-pr.component.html',
  styleUrls: ['./mookie-manage-pr.component.scss']
})
export class MookieManagePrComponent implements OnInit {

  textBody: String;
  title: String;
  createdRelease:Boolean= false;

  constructor(private pressService:MookiePressService, private modalService:NgbModal,private router:Router) { }

  ngOnInit() {
  }

  createPR = function(){

    this.pressService.createPR({textBody:this.textBody,title:this.title}).subscribe(data=>{
      if(data.success){
        this.createdRelease = true;
        const modalRef = this.modalService.open(MookieModalComponent);
        modalRef.componentInstance.modalTitle = "Press release update successfully";
        modalRef.componentInstance.modalBody = "Redirecting ";

        setTimeout(()=>{
          this.router.navigate(['/press/prs/' +data.pr._id]);
        },2000)

        
      }
      else{
        const modalRef = this.modalService.open(MookieModalComponent);
        modalRef.componentInstance.modalTitle = "We're sorry it looks like there are some issues here";
        modalRef.componentInstance.modalBody = "Please try to create the PR Again later ";
      }
    });
  }
}
