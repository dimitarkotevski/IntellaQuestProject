import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.css']
})
export class NavigationPanelComponent implements OnInit {
  
  @Input() productDetail?: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
