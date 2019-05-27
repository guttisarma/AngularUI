import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertProductComponent } from './convert-product.component';

describe('ConvertProductComponent', () => {
  let component: ConvertProductComponent;
  let fixture: ComponentFixture<ConvertProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
