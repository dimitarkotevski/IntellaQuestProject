import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../models/login/user-details';
import { AuthService } from '../authentification/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userDetails?: UserDetails;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    if(!this.authService.GetLoggedUserId()){
      window.location.replace("/error-404");
    }

    this.authService.GetUserDetails(this.authService.GetLoggedUserId()).subscribe((response:UserDetails)=>{
      this.userDetails = response;
    });
  }

}
