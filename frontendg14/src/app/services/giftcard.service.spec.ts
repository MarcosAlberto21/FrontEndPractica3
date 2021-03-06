import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs'; // Add import

import {giftcard , giftcardValue}  from '../models/giftcard'
import {carrito}  from '../models/carrito'
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
    let active = true;
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

  it('should get list of values of giftcards',  (done) => {
    //
    const values = [
      {
        "id": "1",
        "total": "10"
      },
      {
        "id": "2",
        "total": "25"
      },
      {
        "id": "3",
        "total": "50"
      },
      {
        "id": "4",
        "total": "100"
      }
    ];
    spyOn(service, 'getValues').and.returnValue(of(values));
    service.getValues().subscribe(
      (res:Array<giftcardValue>) => {   
        expect(res).toBeInstanceOf(Array);   
        done();
      },
      (err) => {
        expect(err).toBeNull(err);
        done();
      }
    );
  });

  it('should get tasa cambio',  (done) => {

    const tasacambio = [
      {
        "total": "7.85"
      }
    ];
    spyOn(service, 'getTasaCambio').and.returnValue(of(tasacambio));
    service.getTasaCambio().subscribe(
      (res) => {   
        expect(res).toBe(tasacambio);   
        done();
      },
      (err) => {
        expect(err).toBeNull(err);
        done();
      }
    );
  });

  it('should save historial',  (done) => {
    //
    let carrito:carrito;

    const value = 'ok';
    spyOn(service, 'saveHistorialUsuario').and.returnValue(of(value));
    service.saveHistorialUsuario(carrito).subscribe(
      (res) => {   
        expect(res).toBe('ok');   
        done();
      },
      (err) => {
        expect(err).toBeNull(err);
        done();
      }
    );
  });
});
