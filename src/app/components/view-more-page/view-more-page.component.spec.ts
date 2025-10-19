import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMorePageComponent } from './view-more-page.component';

describe('ViewMorePageComponent', () => {
  let component: ViewMorePageComponent;
  let fixture: ComponentFixture<ViewMorePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewMorePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewMorePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
