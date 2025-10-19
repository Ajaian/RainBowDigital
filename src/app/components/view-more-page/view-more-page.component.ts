import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Product, ProductDetail, productDetails } from '../../services/details.constants';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
  selector: 'app-view-more-page',
  standalone: true,
  imports: [RouterModule, CommonModule, HeaderComponent],
  templateUrl: './view-more-page.component.html',
  styleUrl: './view-more-page.component.css'
})
export class ViewMorePageComponent implements OnInit {
  products: any[] = [];
  product: Product | null = null;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.products = nav?.extras.state?.['products'] || [];
  }

  ngOnInit() {
  }
  onProductClick( products: Product) {
    this.product = products;
  }
}
