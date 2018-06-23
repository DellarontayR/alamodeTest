import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';


@Component({
  selector: 'app-mookie-preloader',
  templateUrl: './mookie-preloader.component.html',
  styleUrls: ['./mookie-preloader.component.scss']
})
export class MookiePreloaderComponent implements OnInit {
  progressValue: number;

  constructor() { }

  progress = function () {
    if (this.progressValue < 100) {
      setTimeout(() => {
        this.progressValue+=10;
        this.progress();
      }, 50);

    }
  };


  ngOnInit() {
    this.progressValue = 0;


    this.progress();

    setTimeout(()=>{
      $('.progress-bar').addClass('bBack');

    },10);

    // (function progress(){
    //   if(this.progressValue<100){
    //     setTimeout(()=>{
    //       console.log('wtf');
    //       this.progressValue++;
    //     },200);
    //   }
    // })();

    // while(this.progressValue <100){
    //   setTimeout(()=>{
    //     console.log('wtf');
    //     this.progressValue++;
    //   }, 200)
    // }
  }

}
