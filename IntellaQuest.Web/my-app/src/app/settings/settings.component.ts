import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../models/login/user-details';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { countries } from '../countries/countries';

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
    this.authService.getUserDetails(this.authService.getLoggedUserId()).subscribe((response:UserDetails)=>{
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
