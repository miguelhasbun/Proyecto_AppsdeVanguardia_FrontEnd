import { Component, OnInit, OnDestroy , HostListener} from "@angular/core";
import {WebcamImage} from 'ngx-webcam';
import { LoginService } from '../../../services/login.service';
import { User } from '../../../models/user.model';



@Component({
  selector: "app-profilepage",
  templateUrl: "profilepage.component.html",
  providers: [ LoginService ]
})
export class ProfilepageComponent implements OnInit, OnDestroy {
  public user : User;
  isCollapsed = true;
  focus;
  focus1;
  focus2;
  mostrar: boolean;
  constructor(private loginService: LoginService) {
    this.mostrar = true;
    this.user = new User();
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
