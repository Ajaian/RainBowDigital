import { Component } from '@angular/core';
import { ProductDetail, productDetails } from '../../services/details.constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adminpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adminpage.component.html',
  styleUrl: './adminpage.component.css'
})
export class AdminPageComponent {
  productdetails: ProductDetail[] = [];

  ngOnInit() {
    this.productdetails = productDetails;
  }

  addProduct() {
    // Logic to add a new product
    alert('Add Product functionality to be implemented.');
  }
}
