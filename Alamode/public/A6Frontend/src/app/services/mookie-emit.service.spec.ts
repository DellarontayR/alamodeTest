import { TestBed, inject } from '@angular/core/testing';

import { MookieEmitService } from './mookie-emit.service';

describe('MookieEmitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MookieEmitService]
    });
  });

  it('should be created', inject([MookieEmitService], (service: MookieEmitService) => {
    expect(service).toBeTruthy();
  }));
});
