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

  it('should give error when validate wrong ccn',  () => {
    let ccn = '457116007166251'
    expect(service.validateCcn(ccn)).toBeFalse();
  });

  it('should validate ccn ok',  () => {
    let ccn = '4571160071662511'
    expect(service.validateCcn(ccn)).toBeTrue();
  });

  it('should validate cname alfanumeric',  () => {
    let cname = 'Jose';
    expect(service.validateCname(cname)).toBeTrue();
  });

  it('should validate cexp',  () => {
    let cname = '12/12';
    expect(service.validateCexp(cname)).toBeTrue();
  });

  it('should validate cexp wrong',  () => {
    let cname = '11/12/';
    expect(service.validateCexp(cname)).toBeFalse();
  });

  it('should validate cv',  () => {
    let cname = '123';
    expect(service.validateCv(cname)).toBeTrue();
  });

});
