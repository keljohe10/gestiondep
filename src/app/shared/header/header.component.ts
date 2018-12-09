import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor() { }

  ngOnInit() {

    $(document).ready( () => {
        $(window).scroll(() => {
          let scroll = $(window).scrollTop();

          if (scroll > 1) {
            $('.app-query').removeClass('app-navegacion');
            $('.app-query').addClass('app-transicion');

          } else {
           $('.app-query').addClass('app-navegacion');
          }
        });

      });

  }



}
