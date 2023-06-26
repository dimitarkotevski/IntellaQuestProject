import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserDetails } from '../models/login/user-details';

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
    this.authService.getUserDetails(this.authService.getLoggedUserId()).subscribe((response:UserDetails)=>{
      this.userDetails = response;
    });
  }

}
