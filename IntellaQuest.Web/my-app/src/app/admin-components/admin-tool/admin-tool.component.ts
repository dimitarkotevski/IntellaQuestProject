import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-tool',
  templateUrl: './admin-tool.component.html',
  styleUrls: ['./admin-tool.component.css']
})
export class AdminToolComponent implements OnInit {

  activeAdminTool = ''

  constructor(
    private router: Router
    ) { }

  ngOnInit(): void {
    if(this.activeAdminTool===''){
      this.router.navigate(['admin-tool/products']);
    }
  }

}
