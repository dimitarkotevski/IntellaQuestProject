import { Component, Inject, Input, OnInit } from '@angular/core';
import { OrderViewModel } from '../../admin-tool-models/order-view-model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderService } from 'src/app/customer-components/order-components/order.service';
import { AdminToolOrderService } from '../admin-tool-order-service/admin-tool-order.service';
import { PaymentType } from 'src/app/models/enum/payment-type';
import { OrderGridViewModel } from 'src/app/models/order-grid';
import { LookupViewModel } from 'src/app/models/lookup-view-model';
import { OrderStatus } from 'src/app/models/enum/order-status';


@Component({
  selector: 'app-add-edit-order',
  templateUrl: './add-edit-order.component.html',
  styleUrls: ['./add-edit-order.component.css']
})
export class AddEditOrderComponent implements OnInit {

  @Input() model: OrderGridViewModel

  title: string = ""
  payment?: PaymentType

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private adminOrderService: AdminToolOrderService
  ) { 
    this.model = data.order;

    if(!this.model){
      this.model = new OrderGridViewModel();
      this.model.User = new LookupViewModel()
      this.model.User.Name = ''
      this.model.ShoppingCart = new LookupViewModel()
      this.model.ShoppingCart.Name = ""
    }
  }

  ngOnInit(): void {
    if(this.model.Id){
      this.title = "Edit"
    }else{
      this.title = "Add"
    }
    
  }

}
