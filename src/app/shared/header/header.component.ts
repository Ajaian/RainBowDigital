import { Component, OnInit, ElementRef, Renderer2, input, Input } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  @Input() isHomePage: boolean = false;
  isTransparent:boolean = true;
  constructor(private renderer : Renderer2) { }

   ngOnInit() {
    if(this.isHomePage){
      if (typeof window === 'undefined' || typeof document === 'undefined') {
        return;
      }
      const navbarElement = document.querySelector('.navbar') as HTMLElement | null;
      this.renderer.listen(window, 'scroll', () => {
        const number = window.scrollY || window.pageYOffset || 0;
        this.isTransparent = !(number > 150);
      });
    }
    else{
      this.isTransparent = false;
    }
  }

}