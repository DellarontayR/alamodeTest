import { Component, OnInit } from '@angular/core';
import { MookiePressService } from '../../services/mookie-press.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MookieModalComponent } from '../mookie-modal/mookie-modal.component';

@Component({
  selector: 'app-mookie-pr',
  templateUrl: './mookie-pr.component.html',
  styleUrls: ['./mookie-pr.component.scss']
})
export class MookiePrComponent implements OnInit {

  pr$: Observable<any>;
  pr: any = {};

  constructor(private pressService:MookiePressService, private activatedRoute:ActivatedRoute, private modalService:NgbModal) { }

  ngOnInit() {
    console.log('here');
    this.pr$ = this.activatedRoute.paramMap.pipe(switchMap((params:ParamMap)=>{
      return this.pressService.getPR({prid:params.get('prid')});
    }));

    this.pr$.subscribe(data=>{
      console.log(data);
      if(data.success){
        this.pr = data.pr;

      }
      else{
        const modalRef = this.modalService.open(MookieModalComponent);
        modalRef.componentInstance.modalTitle = "We're sorry it looks like there are some issues here";
        modalRef.componentInstance.modalBody = "Please try to look at this press release later";
      }
    });
  }

  

}
