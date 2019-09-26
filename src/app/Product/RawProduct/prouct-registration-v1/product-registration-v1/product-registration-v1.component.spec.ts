import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRegistrationV1Component } from './product-registration-v1.component';

describe('ProductRegistrationV1Component', () => {
  let component: ProductRegistrationV1Component;
  let fixture: ComponentFixture<ProductRegistrationV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRegistrationV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRegistrationV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
