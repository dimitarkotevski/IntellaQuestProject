import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { ResponseListModel } from 'src/app/models/response';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories-navbar',
  templateUrl: './categories-navbar.component.html',
  styleUrls: ['./categories-navbar.component.css']
})
export class CategoriesNavbarComponent implements OnInit {
  categories?: Category[] | null | undefined;
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((result:ResponseListModel<Category>) => {
      this.categories = result.Items;
    })
  }
  isLinkActive(url: string | undefined | null): boolean {
    if (!url) {
      return false;
    }
    const currentUrl = window.location.pathname;
    return currentUrl.endsWith(url);// Check if the current URL ends with the specified category URL
  }

}
