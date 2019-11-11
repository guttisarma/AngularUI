import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogDiregtoryDetailComponent } from './log-diregtory-detail.component';

describe('LogDiregtoryDetailComponent', () => {
  let component: LogDiregtoryDetailComponent;
  let fixture: ComponentFixture<LogDiregtoryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogDiregtoryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogDiregtoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
