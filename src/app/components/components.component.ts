import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ProductDetail, productDetails, Product } from '../services/details.constants';
import { CommonModule } from '@angular/common';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-components',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './components.component.html',
  styleUrl: './components.component.css',
  providers: [NgbActiveModal]
})
export class ComponentsComponent implements OnInit {
  productdetails: ProductDetail[] = [];
  product: Product | null = null;
  constructor(private http: HttpClient,  private modalService: NgbModal, public activeModal: NgbActiveModal) {  }

  ngOnInit() {
    this.productdetails = productDetails;
  }
  onProductClick(content: any, products: Product) {
    this.modalService.open(content, {windowClass: 'custom-modal', centered: true, size: 'lg', backdrop: 'static'});
    this.product = products;
  }
}