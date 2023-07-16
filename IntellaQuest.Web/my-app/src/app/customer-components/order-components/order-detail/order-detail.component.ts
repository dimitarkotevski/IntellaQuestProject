import { Component, Input, OnInit } from '@angular/core';
import { OrderGridViewModel } from 'src/app/models/order-grid';
import { OrderService } from '../order.service';
import { AuthentificationService } from 'src/app/authentification/authentification.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  @Input() activeOrder?: any;

  constructor(
  ) { }
  ngOnInit(): void {

  }

}
