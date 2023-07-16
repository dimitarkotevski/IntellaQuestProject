import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification/authentification.service';
import { OrderService } from '../customer-components/order-components/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  activeOrder?: any;
  
  constructor(
    private orderService: OrderService,
    private authService: AuthentificationService,
  ) { }
  ngOnInit(): void {
    this.orderService.GetUserActiveOrder(this.authService.GetLoggedUserId()).subscribe((response)=>{
      this.activeOrder = response
    })
  }

}
