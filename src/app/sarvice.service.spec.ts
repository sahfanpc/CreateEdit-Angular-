import { TestBed } from '@angular/core/testing';

import { SarviceService } from './sarvice.service';

describe('SarviceService', () => {
  let service: SarviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SarviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
