import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from '../services/category-service/category.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
  @Input() openAlert : (alert : Alert)=>void
  @Input() entity: any;
  @ViewChild("FormAddEdit") FormAddEdit: NgForm;
  error : any;
  showErrorMassage: boolean;
  title:string;
  successCreatedMassage={
    type: 'success',
    message: 'Successfully created',
  }
  successEditMassage={
    type: 'success',
    message: 'Successfully edited',
  }
  constructor(private activeModal: NgbActiveModal,private serviceCategory: CategoryService) {}

  ngOnInit() {
    this.title='Add';
    this.error='Category Name is required'
  }
  save(entityForm: NgForm)  {
    if(!entityForm.valid){
      this.showErrorMassage=true;
      return;
    }else{
      if(this.entity.Id){
        this.serviceCategory.edit(this.entity).subscribe( (res:any)=>{
          this.activeModal.close();
          // this.refreshData()
          this.openAlert(this.successEditMassage)
        });
      }else{
        this.serviceCategory.create(this.entity).subscribe((res:any)=>{
          this.activeModal.close();
          // this.refreshData()
          this.openAlert(this.successCreatedMassage)
        })
      }
    }
    
  }
}
