import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { GiftcardService } from './giftcard.service';

describe('GiftcardService', () => {
  let service: GiftcardService;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        GiftcardService
      ],
    });
    service = TestBed.inject(GiftcardService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get list of active giftcards', () => {
    //
    let active = true;
    let giftcards = service.getGiftcard(active);
    let giftcardsNOactivas = giftcards.filter((obj)=>{return obj.active})
    expect(giftcards).toBeInstanceOf(Array);
    expect(giftcardsNOactivas.length).toBe(0);
  });
});
