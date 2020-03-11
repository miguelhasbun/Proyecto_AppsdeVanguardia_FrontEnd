import { Component, OnInit, OnDestroy , HostListener} from "@angular/core";
import {WebcamImage} from 'ngx-webcam';

@Component({
  selector: "app-profilepage",
  templateUrl: "profilepage.component.html"
})
export class ProfilepageComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  focus;
  focus1;
  focus2;
  mostrar: boolean;
  constructor() {
    this.mostrar = true;
  }
  public webcamImage: WebcamImage = null;
  handleImage(webcamImage: WebcamImage) {
  this.webcamImage = webcamImage;
  }
  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("profile-page");
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("profile-page");
  }
}
