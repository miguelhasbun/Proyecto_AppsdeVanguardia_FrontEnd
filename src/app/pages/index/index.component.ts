import { Component, OnInit, OnDestroy } from '@angular/core';
import noUiSlider from 'nouislider';

@Component({
  selector: 'app-index',
  templateUrl: 'index.component.html'
})
export class IndexComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  focus;
  focus1;
  focus2;
  date = new Date();
  pagination = 3;
  pagination1 = 1;
  constructor() { }
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('index-page');

    var slider = document.getElementById("sliderRegular");

    var slider2 = document.getElementById("sliderDouble");

    
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("index-page");
  }
}
