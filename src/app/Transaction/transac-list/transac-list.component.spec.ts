import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransacListComponent } from './transac-list.component';

describe('TransacListComponent', () => {
  let component: TransacListComponent;
  let fixture: ComponentFixture<TransacListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransacListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransacListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
