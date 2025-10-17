import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isTransparent:boolean = true;
  constructor(private renderer : Renderer2) { }

   ngOnInit() {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }
    const navbarElement = document.querySelector('.navbar') as HTMLElement | null;
    this.renderer.listen(window, 'scroll', () => {
      const number = window.scrollY || window.pageYOffset || 0;
      this.isTransparent = !(number > 150);
    });
  }

}