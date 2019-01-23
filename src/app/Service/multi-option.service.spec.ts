import { TestBed } from '@angular/core/testing';

import { MultiOptionService } from './multi-option.service';

describe('MultiOptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MultiOptionService = TestBed.get(MultiOptionService);
    expect(service).toBeTruthy();
  });
});
