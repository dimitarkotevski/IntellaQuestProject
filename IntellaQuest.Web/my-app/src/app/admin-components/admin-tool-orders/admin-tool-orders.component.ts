import { Component, OnInit } from '@angular/core';
import { AdminToolOrderService } from './admin-tool-order-service/admin-tool-order.service';
import { ResponseModel } from '../admin-tool-models/admin-tool-response-model';
import { OrderGridViewModel } from 'src/app/models/order-grid';
import { RequestModel } from '../admin-tool-models/admin-tool-request-model';
import { OrderViewModel } from '../admin-tool-models/order-view-model';
import { YesNoDialogComponent } from 'src/app/customer-components/yes-no-dialog/yes-no-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { AddEditOrderComponent } from './add-edit-order/add-edit-order.component';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/authentification/authentification.service';

@Component({
  selector: 'app-admin-tool-orders',
  templateUrl: './admin-tool-orders.component.html',
  styleUrls: ['./admin-tool-orders.component.css']
})
export class AdminToolOrdersComponent implements OnInit {

  request: RequestModel;
  response: ResponseModel<OrderGridViewModel>

  pagination: number[] = [5 , 10, 20, 50, 100]

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private toastr: ToastrService,
    private authService: AuthentificationService,
    private adminToolOrderService: AdminToolOrderService,
    ) { 
      this.request = new RequestModel();
      this.response = new ResponseModel<OrderGridViewModel>()
    }

  ngOnInit(): void {

    if(this.authService.getRole() != 'admin'){
      this.router.navigate(['error-404']);
    }

    this.request = {
      PageNeeded: 1,
      Size: 10,
    }

    this.getData();
  }

  addEditOrder(order?: OrderGridViewModel){
    const dialogRef = this.dialog.open(AddEditOrderComponent, {
      data: { order },
      width: '100%', // Set the width of the modal
      panelClass: 'custom-modalbox'
    });
  
    dialogRef.afterClosed().subscribe((result : OrderViewModel) => {
      if(result!= null){
        if(result.Id){
          this.adminToolOrderService.update(result).subscribe(()=>{
            this.toastr.success("Success changed product")
            this.getData();
          })
        }else{
          this.adminToolOrderService.create(result).subscribe(()=>{
            this.toastr.success("Success added product")
            this.getData();
          })
        }
      }
    });
    //No need admin to add orders
    // this.newItem = {
    //   Id: undefined,
    //   Name: "",
    //   Price: undefined,
    //   Description: "",
    //   Category: undefined
    // };
  }

  deleteOrder(id:string | undefined){
    if(id){
      const dialogRef = this.dialog.open(YesNoDialogComponent, {
        data: { id },
        width: '500px', // Set the width of the modal
        panelClass: 'custom-modalbox'
      });
      dialogRef.afterClosed().subscribe((result : OrderViewModel) => {
        if(result){
          this.adminToolOrderService.delete(id).subscribe(()=>{
            this.toastr.success("Success deleted product")
            this.getData()
          })
        }else{
          console.log("no")
        }
      });
    }
  }

  getData(){
    this.adminToolOrderService.getTable(this.request).subscribe((response: ResponseModel<OrderGridViewModel>)=>{
      this.response = response
    })
  }

  resetSearchString(){
    this.request.SearchString = '';
    this.getData();
  }

  onPageChange(value: number){
    this.request.PageNeeded = value;
    this.getData();
  }
  onPageSizeChange(value : number){
    this.request.Size = value;
    this.getData();
  }
}
