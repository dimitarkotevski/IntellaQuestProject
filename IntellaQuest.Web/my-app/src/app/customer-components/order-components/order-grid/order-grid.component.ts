import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/authentification/authentification.service';
import { ResponseListModel } from '../../../models/response';
import { OrderGridViewModel } from '../../../models/order-grid';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-grid',
  templateUrl: './order-grid.component.html',
  styleUrls: ['./order-grid.component.css']
})
export class OrderGridComponent implements OnInit {
  orders?: OrderGridViewModel[] | null;
  constructor(
    private orderService: OrderService,
    private authService: AuthentificationService,
  ) { }

  ngOnInit(): void {
    this.orderService.GetUserNotActiveOrders(this.authService.getLoggedUserId()).subscribe((res:ResponseListModel<OrderGridViewModel>)=>{
      this.orders = res.Items;
    })
  }

}
