import { Component, Input, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  @Input() activeOrder?: any;

  constructor(
    private orderService: OrderService,
    private router:Router,
  ) { }
  ngOnInit(): void {

  }

  Confirmation(){
    const modalElement = document.getElementById('confirmation');
        if (modalElement) {
            modalElement.classList.remove('show');
            modalElement.style.display = 'none';
            const modalBackdrop = document.querySelector('.modal-backdrop');
            if (modalBackdrop) {
                document.body.removeChild(modalBackdrop);
            }
        }
  }

  CancelOrder(orderId:string){
    const modalElement = document.getElementById('cancelOrder');
    if(orderId){
      this.orderService.CancelActiveOrder(orderId).subscribe((res)=>{
        if (modalElement) {
          modalElement.classList.remove('show');
          modalElement.style.display = 'none';
          const modalBackdrop = document.querySelector('.modal-backdrop');
          if (modalBackdrop) {
              document.body.removeChild(modalBackdrop);
          }
          window.location.reload()
      }
      })
    }
  }

}
