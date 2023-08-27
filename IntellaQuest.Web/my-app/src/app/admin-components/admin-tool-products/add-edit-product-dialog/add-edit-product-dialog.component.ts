import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from 'src/app/category-products/category.service';
import { CategoryViewModel } from 'src/app/models/category';
import { ProductViewModel } from 'src/app/models/product-view-model';
import { ResponseModel } from '../../admin-tool-models/admin-tool-response-model';
import { LookupViewModel } from 'src/app/models/lookup-view-model';

@Component({
  selector: 'app-add-edit-product-dialog',
  templateUrl: './add-edit-product-dialog.component.html',
  styleUrls: ['./add-edit-product-dialog.component.css']
})
export class AddEditProductDialogComponent implements OnInit {

  @Input() model: ProductViewModel
  title: string = ""

  categories?: CategoryViewModel[]

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private categoryService: CategoryService
    ) {
    this.model = data.product;
  }

  ngOnInit(): void {
    if(this.model.Id){
      this.title = "Edit"
    }else{
      this.title = "Add"
    }

    console.log(this.model.Category)
    this.categoryService.getAllCategories().subscribe((response: ResponseModel<CategoryViewModel>)=>{
      if(response.Items){
        console.log(response.Items)
        this.categories = response.Items;
        console.log(this.categories);
      }
    })
  }

  changeCategori(item : LookupViewModel){
    console.log(item)
    this.model.Category = item;
  }

}
