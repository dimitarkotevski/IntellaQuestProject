import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isUserAuthenticated: boolean = false;
  products: any;
  totalItems?: number

  constructor(
    private productService: ProductService,
    ) { }

  ngOnInit(): void {
    this.productService.getAll(null).subscribe(products => {
          this.products = products.data;
          this.totalItems = products.recordsTotal;
        });
  }

}
