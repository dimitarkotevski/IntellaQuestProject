import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { countries } from '../countries/countries';
import { UserDetails } from '../models/login/user-details';
import { AuthService } from '../authentification/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  countriesList = countries;
  activeTab: string = 'account';
  userDetails?: UserDetails;

  constructor( private authService: AuthService,private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.authService.GetUserDetails(this.authService.GetLoggedUserId()).subscribe((response:UserDetails)=>{
      this.userDetails = response;
    });
    
  }
  updateUserPublicInfo(username:string| undefined,description:string | undefined){
    this.toastr.success('Update info')
  }

  switchTab(tab: string) {
    this.activeTab = tab;
  }
}
