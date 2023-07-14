import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { AuthService } from 'src/app/authentification/auth.service';
import { ResponseListModel } from '../models/response';
import { OrderGridViewModel } from '../models/order-grid';

@Component({
  selector: 'app-order-grid',
  templateUrl: './order-grid.component.html',
  styleUrls: ['./order-grid.component.css']
})
export class OrderGridComponent implements OnInit {
  orders?: OrderGridViewModel[] | null;
  constructor(
    private orderService: OrderService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.orderService.GetUserOrders(this.authService.GetLoggedUserId()).subscribe((res:ResponseListModel<OrderGridViewModel>)=>{
      console.log(res);
      this.orders = res.Items;
    })
  }

}
