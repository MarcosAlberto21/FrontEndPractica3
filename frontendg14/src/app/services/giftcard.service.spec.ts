import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs'; // Add import

import {giftcard}  from '../models/giftcard'
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

  it('should get list of active giftcards',  (done) => {
    //
    const giftcards = [
      {
        "id": "2",
        "name": "PlayStation",
        "image": "https://www.allkeyshop.com/blog/wp-content/uploads/PlayStationNetworkGiftCard.jpg",
        "chargeRate": 0.25,
        "active": true,
        "availability": [
          1,
          3
        ]
      },
      {
        "id": "3",
        "name": "Steam",
        "image": "https://mojolika.com/wp-content/uploads/2019/04/196.png",
        "chargeRate": 0.1,
        "active": true,
        "availability": [
          1,
          2
        ]
      },
      {
        "id": "5",
        "name": "Microsoft",
        "image": "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1XIn1?ver=1a7a",
        "chargeRate": 0.75,
        "active": true,
        "availability": [
          2,
          3,
          1
        ]
      }
    ];
    spyOn(service, 'getGiftcard').and.returnValue(of(giftcards));
    let active = false;
    service.getGiftcard(active).subscribe(
      (res:Array<giftcard>) => {
        let giftcards = res;
        let giftcardsNOactivas = giftcards.filter((obj)=>{return !obj.active})
        expect(giftcards).toBeInstanceOf(Array);
        expect(giftcardsNOactivas.length).toBe(0);
        done();
      },
      (err) => {
        expect(err).toBeNull(err);
        done();
      }
    );
  });
});
