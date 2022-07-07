import { TestBed } from '@angular/core/testing';

import { AsociateService } from './asociate.service';

describe('AsociateService', () => {
  let service: AsociateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsociateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
