import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { productDetails } from '../services/details.constants';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from '../shared/product-details/product-details.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-components',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './components.component.html',
  styleUrl: './components.component.css'
})
export class ComponentsComponent implements OnInit {
  productdetails: any[] = [];
  constructor(private http: HttpClient,  private modalService: NgbModal) {  }

  ngOnInit() {
    debugger;
    this.productdetails = productDetails;
  }
  onProductClick(product: any) {
    const modalReference = this.modalService.open(ProductDetailsComponent, { size: 'lg' });
    modalReference.componentInstance.product = product;
  }
}