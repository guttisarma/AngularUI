import { TestBed } from '@angular/core/testing';

import { TransacService } from './transac.service';

describe('TransacService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransacService = TestBed.get(TransacService);
    expect(service).toBeTruthy();
  });
});
