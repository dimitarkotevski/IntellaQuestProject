import { Component, OnInit } from '@angular/core';
import { AdminToolOrderService } from './admin-tool-order-service/admin-tool-order.service';
import { ResponseModel } from '../admin-tool-models/admin-tool-response-model';
import { OrderGridViewModel } from 'src/app/models/order-grid';
import { RequestModel } from '../admin-tool-models/admin-tool-request-model';

@Component({
  selector: 'app-admin-tool-orders',
  templateUrl: './admin-tool-orders.component.html',
  styleUrls: ['./admin-tool-orders.component.css']
})
export class AdminToolOrdersComponent implements OnInit {

  request: RequestModel;

  response: ResponseModel<OrderGridViewModel>

  constructor(
    private adminToolOrderService: AdminToolOrderService
    ) { 
      this.request = new RequestModel();
      this.response = new ResponseModel<OrderGridViewModel>()
    }

  ngOnInit(): void {

    this.request = {
      PageNeeded: 1,
      Size: 10,
    }

    this.adminToolOrderService.getTable(this.request).subscribe((response: ResponseModel<OrderGridViewModel>)=>{
      this.response = response
    })
  }

}
