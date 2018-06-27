import { TestBed, inject } from '@angular/core/testing';

import { MookiePressService } from './mookie-press.service';

describe('MookiePressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MookiePressService]
    });
  });

  it('should be created', inject([MookiePressService], (service: MookiePressService) => {
    expect(service).toBeTruthy();
  }));
});
