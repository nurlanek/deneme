import { TestBed, inject } from '@angular/core/testing';

import { BbService } from './bb.service';

describe('BbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BbService]
    });
  });

  it('should be created', inject([BbService], (service: BbService) => {
    expect(service).toBeTruthy();
  }));
});
