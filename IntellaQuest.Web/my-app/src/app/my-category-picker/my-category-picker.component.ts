import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoryService } from '../services/category-service/category.service';
import { Category } from '../category';

@Component({
  selector: 'app-my-category-picker',
  templateUrl: './my-category-picker.component.html',
  styleUrls: ['./my-category-picker.component.scss']
})
export class MyCategoryPickerComponent implements OnInit {
  @Input() model: any;
  @Input() Category: any; 
  @Output() modelChange: EventEmitter<any>;
  @Input() FormGroup: any;
  categoryId:any;
  categories: []
  constructor(private categoryService: CategoryService) { 
    this.modelChange = new EventEmitter();
  }

  ngOnInit() {    
    this.categoryId = !this.model ? this.categoryId="" : this.categoryId=this.model.Id 
    this.categoryService.allTable().subscribe((res:any)=>{
      this.categories=res.data;
    })
  }
  onChange(){
    this.model = {
      Id: this.categoryId,
    }
    this.modelChange.emit(this.model)
  }

}
