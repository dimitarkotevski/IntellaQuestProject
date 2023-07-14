import { Component, OnInit } from '@angular/core';
import { AuthService } from './authentification/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isUserAuthenticated: boolean = false;
  constructor(
    private authService: AuthService
  ) {
  }
  ngOnInit(): void {
    this.refreshState();
  }
  refreshState(){
    this.isUserAuthenticated = this.authService.IsAuthenticated();
  }
}
