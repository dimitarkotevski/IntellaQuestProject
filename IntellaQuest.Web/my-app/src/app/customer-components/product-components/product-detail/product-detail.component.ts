import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { ProductGrid } from '../../../models/product-grid';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productDetail?: ProductGrid

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
        this.productService.get(id).subscribe( (result: ProductGrid)=>{
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
