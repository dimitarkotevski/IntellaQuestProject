import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../models/login/user-details';
import { AuthentificationService } from '../authentification/authentification.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userDetails?: UserDetails;
  constructor(
    private authService: AuthentificationService
  ) { }

  ngOnInit(): void {
    if(!this.authService.getLoggedUserId()){
      window.location.replace("/error-404");
    }

    this.authService.getUserDetails(this.authService.getLoggedUserId()).subscribe((response:UserDetails)=>{
      this.userDetails = response;
    });
  }

}
