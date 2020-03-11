import {Component} from '@angular/core';
import {WebcamImage} from 'ngx-webcam';

@Component({
  selector: 'app-landingpage',
  templateUrl: 'landingpage.component.html'
})
export class LandingpageComponent  {

  public webcamImage: WebcamImage = null;
handleImage(webcamImage: WebcamImage) {
this.webcamImage = webcamImage;
}
 





}
