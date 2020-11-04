import { TestBed } from '@angular/core/testing';

import { VercatalogoService } from './vercatalogo.service';

describe('VercatalogoService', () => {
  let service: VercatalogoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VercatalogoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
