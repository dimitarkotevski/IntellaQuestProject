import { Component, Input, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { YesNoDialogComponent } from '../../yes-no-dialog/yes-no-dialog.component';
import { MakeOrderConfirmationComponent } from './make-order-confirmation/make-order-confirmation.component';
import { OrderViewModel } from 'src/app/admin-components/admin-tool-models/order-view-model';
import { LookupViewModel } from 'src/app/models/lookup-view-model';
import { AuthentificationService } from 'src/app/authentification/authentification.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  @Input() activeOrder?: any;

  constructor(
    private router:Router,
    private dialog: MatDialog,
    private orderService: OrderService,
    private authService: AuthentificationService
  ) { }
  ngOnInit(): void {

  }

  Confirmation(order: OrderViewModel){
    // let user = new LookupViewModel();
    // user.Id = this.authService.getLoggedUserId() || "";
    // order.User = user;
    const dialogRef = this.dialog.open(MakeOrderConfirmationComponent, {
      data: { order },
      width: '500px', // Set the width of the modal
      panelClass: 'custom-modalbox'
    });
    dialogRef.afterClosed().subscribe((result) => {
      if(result){
         this.orderService.MakeAPay(order).subscribe(()=>{
           window.location.replace("my-order");
         })
      }
    });
  }

  CancelOrder(orderId:string){
    const text = "Do you want to cancel this order?"
    const dialogRef = this.dialog.open( YesNoDialogComponent, {
      data: { text },
      width: '500px', // Set the width of the modal
      panelClass: 'custom-modalbox'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result){
        // this.orderService.CancelActiveOrder(orderId).subscribe(()=>{
        //   window.location.replace("my-order");
        // })
      }
    });
  }

  // Confirmation(){
  //   const modalElement = document.getElementById('confirmation');
  //       if (modalElement) {
  //           modalElement.classList.remove('show');
  //           modalElement.style.display = 'none';
  //           const modalBackdrop = document.querySelector('.modal-backdrop');
  //           if (modalBackdrop) {
  //               document.body.removeChild(modalBackdrop);
  //           }
  //       }
  // }

  // CancelOrder(orderId:string){
  //   const modalElement = document.getElementById('cancelOrder');
  //   if(orderId){
  //     this.orderService.CancelActiveOrder(orderId).subscribe((res)=>{
  //       if (modalElement) {
  //         modalElement.classList.remove('show');
  //         modalElement.style.display = 'none';
  //         const modalBackdrop = document.querySelector('.modal-backdrop');
  //         if (modalBackdrop) {
  //             document.body.removeChild(modalBackdrop);
  //         }
  //         window.location.reload()
  //     }
  //     })
  //   }
  // }

}
