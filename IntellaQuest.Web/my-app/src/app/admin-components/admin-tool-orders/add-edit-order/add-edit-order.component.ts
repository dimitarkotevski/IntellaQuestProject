import { Component, Inject, Input, OnInit } from '@angular/core';
import { OrderViewModel } from '../../admin-tool-models/order-view-model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderService } from 'src/app/customer-components/order-components/order.service';
import { AdminToolOrderService } from '../admin-tool-order-service/admin-tool-order.service';

@Component({
  selector: 'app-add-edit-order',
  templateUrl: './add-edit-order.component.html',
  styleUrls: ['./add-edit-order.component.css']
})
export class AddEditOrderComponent implements OnInit {

  @Input() model: OrderViewModel

  title: string = ""

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private adminOrderService: AdminToolOrderService
  ) { 
    this.model = data.order;
  }

  ngOnInit(): void {
    if(this.model.Id){
      this.title = "Edit"
    }else{
      this.title = "Add"
    }

    
  }

}
