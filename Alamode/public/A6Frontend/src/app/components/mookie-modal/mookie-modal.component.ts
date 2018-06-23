import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-mookie-modal',
  templateUrl: './mookie-modal.component.html',
  styleUrls: ['./mookie-modal.component.scss']
})
export class MookieModalComponent implements OnInit {
  @Input() modalTitle;
  @Input() modalBody;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
