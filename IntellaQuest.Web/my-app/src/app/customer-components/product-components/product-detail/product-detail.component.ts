import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productDetail?: Product

  message?: string="";
  type?: any="";

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if(id){
        this.productService.get(id).subscribe( (result: Product)=>{
          this.productDetail = result;
        })
      }
    });
  }

  addToFavourite(Id:string | undefined){
    console.log("in favourite")
    this.message = 'Success message';
    this.type = 'success';
  }

}
