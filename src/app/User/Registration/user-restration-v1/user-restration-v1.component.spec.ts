import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRestrationV1Component } from './user-restration-v1.component';

describe('UserRestrationV1Component', () => {
  let component: UserRestrationV1Component;
  let fixture: ComponentFixture<UserRestrationV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRestrationV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRestrationV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
