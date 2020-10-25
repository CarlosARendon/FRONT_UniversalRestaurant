import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListBuyComponent } from './product-list-buy.component';

describe('ProductListBuyComponent', () => {
  let component: ProductListBuyComponent;
  let fixture: ComponentFixture<ProductListBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListBuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
