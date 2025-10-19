import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ProductDetail, productDetails, Product } from '../services/details.constants';
import { CommonModule } from '@angular/common';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { HeaderComponent } from "../shared/header/header.component";

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './components.component.html',
  styleUrl: './components.component.css',
  providers: [NgbActiveModal]
})
export class ComponentsComponent implements OnInit {
  homePage: boolean = false;
  productdetails: ProductDetail[] = [];
  product: Product | null = null;
  constructor(private http: HttpClient,  private modalService: NgbModal, public activeModal: NgbActiveModal, private router: Router) {  }

  ngOnInit() {
    this.homePage=true;
    this.productdetails = productDetails;
  }
  onProductClick(content: any, products: Product) {
    this.modalService.open(content, {windowClass: 'custom-modal', centered: true, size: 'lg', backdrop: 'static'});
    this.product = products;
  }
  viewMore(products: Product[]) {
    this.router.navigate(['/view-more-page'], { state: { products } })
    .then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    this.homePage=false;
  }
}