import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs'; // Add import

import { CcService } from './cc.service';

describe('CcService', () => {
  let service: CcService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      providers: [
        CcService
      ],
    });
    service = TestBed.inject(CcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should give error whne validate wrong ccn',  (done) => {
    let ccn = '123'
    expect(service.validateCcn(ccn)).toBeFalse();
  });

});
