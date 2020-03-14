import {Component} from '@angular/core';
import {WebcamImage} from 'ngx-webcam';



@Component({
  selector: 'app-landingpage',
  templateUrl: 'landingpage.component.html'
})
export class LandingpageComponent  {
  imageURL = '';
  AGE = '';
  subscriptionKey: string = 'cf718d5849d14d7880bf62eaf6cf3f6b';

  constructor() {}

  public webcamImage: WebcamImage = null;

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
    }
  }