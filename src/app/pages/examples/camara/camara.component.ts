import {Component, Output, EventEmitter} from '@angular/core';
import { Subject, Observable } from 'rxjs';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';

@Component({

selector: 'app-camara',
templateUrl: './camara.component.html',
styleUrls: ['./camara.component.scss']
})
export class CamaraComponent {
  @Output()
public pictureTaken = new EventEmitter<WebcamImage>();
public showWebcam = true;
public multipleWebcamsAvailable = false;
public deviceId: string;
public videoOptions: MediaTrackConstraints = {
// width: {ideal: 1024},
// height: {ideal: 576}
};public errors: WebcamInitError[] = [];
// webcam snapshot trigger

}

