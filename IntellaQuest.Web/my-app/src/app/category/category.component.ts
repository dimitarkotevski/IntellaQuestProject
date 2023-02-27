import { Component, NgModule, OnInit, ViewEncapsulation } from '@angular/core';
import { CategoryService } from '../services/category-service/category.service';
import {ShopReponse} from '../shop-response';
import { ShopRequest } from '../shop-request';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEditComponent } from '../add-edit/add-edit.component';
import { Category } from '../category';
import { DeleteComponent } from '../delete/delete.component';


@NgModule({
  imports: [
    FormsModule,
  ],
})
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CategoryComponent implements OnInit {
  category : Category;
  show: true;
	alerts: Alert[] = [];
  successMassage={
    type: 'success',
    message: 'Successfully',
  }
  successCreatedMassage={
    type: 'success',
    message: 'Successfully created',
  }
  successEditMassage={
    type: 'success',
    message: 'Successfully edited',
  }
  shopResponse: ShopReponse = new ShopReponse();
  shopRequest: ShopRequest = {
    SearchStatus: null,
    SearchString:"",
    PageNeeded: 1,
    Size: 5
  };
  categories : any[];
  constructor(private categoryService: CategoryService,
              private modalService: NgbModal) {
   }
   closeAlert(alert: Alert) {
		this.alerts.splice(this.alerts.indexOf(alert), 1);
	}
  openAlert(alert: Alert){
    this.alerts.push(alert)
    setTimeout(() => this.closeAlert(alert), 5000);
  }

  ngOnInit() {
    this.refreshData();
  }
  reset(){
    this.shopRequest.SearchString="";
    this.shopRequest.SearchStatus=null;
    this.refreshData();
  }
  sort(sortName:string){
    this.shopRequest.SortName=sortName;
    if(!this.shopRequest.isAscending){
      this.shopRequest.isAscending='asc'
    }else if(this.shopRequest.isAscending=='asc'){
      this.shopRequest.isAscending='desc';
    }
    else if(this.shopRequest.isAscending=='desc'){
      this.shopRequest.isAscending='asc'
    }
    this.refreshData();
  }
  refreshData(){
    this.categoryService.getAll(this.shopRequest).subscribe( (res: ShopReponse) =>{
    this.shopResponse = res;
    this.categories = this.shopResponse.Items
  });
  }
  pageChange($event: any){
    this.shopRequest.PageNeeded=$event;
    this.refreshData();
  }
  pageSizeChange(size: number){
    this.shopRequest.Size=size;
    this.refreshData();
  }

  openAddEditModal(Id:number) {
    if(Id){
      this.categoryService.getById(Id).subscribe((response : Category )=>
      {
        this.category=response;
        const modalRef = this.modalService.open(AddEditComponent,{ centered: true })
        modalRef.result.then(() => {
          this.refreshData();
        });
        modalRef.componentInstance.entity=this.category;

        modalRef.componentInstance.openAlert = this.openAlert.bind(this)
      });
	  }else{
      this.category = {
        Id: undefined,
        Name: '',
        Status: false
      }
      const modalRef = this.modalService.open(AddEditComponent,{ centered: true });
      modalRef.componentInstance.entity=this.category;
      modalRef.result.then(() => {
        this.refreshData();
      });
      modalRef.componentInstance.openAlert = this.openAlert.bind(this)
    }
  }
  openModalDelete(Id:number){
    const modalRef = this.modalService.open(DeleteComponent,{ centered: true });
    modalRef.componentInstance.Id=Id;
    modalRef.result.then(() => {
      this.refreshData();
    });
    modalRef.componentInstance.openAlert = this.openAlert.bind(this);
  }
};

