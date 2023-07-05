import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  @Input() isItem: boolean = false;
  @Input() itemDetail?: any;
  
  user?: string;

  constructor(private userAuth: AuthService ) { }

  ngOnInit(): void {
    this.user = this.userAuth.getLoggedUsername();
  }
}
