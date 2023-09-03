import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserGridModel } from 'src/app/models/user-grid-model';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {

  @Input() model: UserGridModel
  title: string = ""
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { 
    this.model = data.user;
  }

  ngOnInit(): void {
    if(this.model.Id){
      this.title = "Edit"
    }else{
      this.title = "Add"
    }
    
  }

}
