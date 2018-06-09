import { Component, OnInit, Renderer2 } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-mookie-social',
  templateUrl: './mookie-social.component.html',
  styleUrls: ['./mookie-social.component.scss']
})
export class MookieSocialComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    let $insta = $('#insta');
    let $twit = $('#twit');
    let getInstaHeight = function (event) {
      if (event.origin.indexOf('http://localhost:8081') || event.origin.indexOf('https://www.mookiedough.co')) {
        var eventData = JSON.parse(event.data);
        if (eventData.type === "lightwidget_widget_size") {
          $('#insta').css({ height: eventData.size });
          window.removeEventListener("message", getInstaHeight, false);
        }
      }
      else {
        return;
      }
    }

    let resizeInsta = function () {
      window.addEventListener('message', getInstaHeight);
      // document.getElementById('insta').content.postMessage('', '*');
    };

    document.getElementById('insta').onload = function () {
      resizeInsta();
      window.addEventListener('message', resizeTwit);
      console.log('here');
    };

    let resizeTwit = () => {
      let jsBody = '<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';
      let htBody = '<a class="twitter-timeline" href="https://twitter.com/_Mookie_Dough?ref_src=twsrc%5Etfw">Tweets by _Mookie_Dough</a>';
      let twit = this.renderer.selectRootElement('#twit');
      let js = this.renderer.createElement("script");
      let ht = this.renderer.createElement("a");
      // ht.class="twitter-timeline";
      ht.setAttribute('class','twitter-timeline');
      ht.setAttribute('href',"https://twitter.com/_Mookie_Dough?ref_src=twsrc%5Etfw");// ="https://twitter.com/_Mookie_Dough?ref_src=twsrc%5Etfw";
      js.src = 'https://platform.twitter.com/widgets.js';
      js.async = true;
      this.renderer.appendChild(twit, js);
      this.renderer.appendChild(twit,ht);
      console.log(js);

      $('#twit').append(js);
      window.removeEventListener("message", resizeTwit, false);

    };

    document.getElementById('twit').onload = function () {
      console.log('here');
      // window.addEventListener('message', resizeTwit);

      //  .appendChild(js);
    };
   
  }

  nada = function(){
    console.log('interesting');
  };

}
