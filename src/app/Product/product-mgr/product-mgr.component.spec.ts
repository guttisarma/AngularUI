import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMgrComponent } from './product-mgr.component';

describe('ProductMgrComponent', () => {
  let component: ProductMgrComponent;
  let fixture: ComponentFixture<ProductMgrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductMgrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
