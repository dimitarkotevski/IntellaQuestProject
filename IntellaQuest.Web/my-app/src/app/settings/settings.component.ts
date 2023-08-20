import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { countries } from '../countries/countries';
import { UserDetails } from '../models/login/user-details';
import { AuthentificationService } from '../authentification/authentification.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  countriesList = countries;
  activeTab: string = 'account';
  userDetails?: UserDetails;

  constructor( private authService: AuthentificationService,private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.authService.getUserDetails(this.authService.getLoggedUserId()).subscribe((response:UserDetails)=>{
      this.userDetails = response;
    });
    
  }
  updateUserPublicInfo(user:UserDetails){
    this.authService.updateUserDetails(user).subscribe(()=>{
      this.toastr.success('Update info')
    })
  }

  switchTab(tab: string) {
    this.activeTab = tab;
  }
}
