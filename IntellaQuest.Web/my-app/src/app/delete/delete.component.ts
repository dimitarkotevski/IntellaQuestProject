import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from '../services/category-service/category.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  @Input() openAlert : (alert : Alert)=>void
  successMassage={
    type: 'success',
    message: 'Successfully',
  }
  @Input() entity: any;
  title:string;
  constructor(private activeModal: NgbActiveModal, private servicecategory: CategoryService) { }

  ngOnInit() {
    this.title='Delete';
  }
  deleteEntity(Id:number){
    this.servicecategory.delete(Id).subscribe(()=>{
      this.activeModal.close()
      this.openAlert(this.successMassage)
    })
  }
}
