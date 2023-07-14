import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() isAuthenticated?: boolean;

  errorMessage?:string = "";
  username: string = "";
  password: string = "";
  constructor(
    private authService:AuthService,
    private router:Router,
    ) { }

  ngOnInit(): void {
    if(this.authService.IsAuthenticated()){
      this.router.navigate(["/"])
    }
  }
  loginUser(){

    if(this.username ==="" || this.password ===""){
      this.errorMessage = "Fields are required";
      return;
    }
    this.authService.Login(this.username, this.password).subscribe(()=>{
      window.location.replace('/')
    },
    (error) => {
      this.errorMessage = error.error.exception;
    })
  }
}
