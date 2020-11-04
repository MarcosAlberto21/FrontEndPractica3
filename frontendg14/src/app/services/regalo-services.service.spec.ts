import { TestBed } from '@angular/core/testing';

import { RegaloServicesService } from './regalo-services.service';

describe('RegaloServicesService', () => {
  let service: RegaloServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegaloServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
