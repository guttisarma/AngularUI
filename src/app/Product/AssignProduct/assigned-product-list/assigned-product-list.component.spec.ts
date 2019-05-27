import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedProductListComponent } from './assigned-product-list.component';

describe('AssignedProductListComponent', () => {
  let component: AssignedProductListComponent;
  let fixture: ComponentFixture<AssignedProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
