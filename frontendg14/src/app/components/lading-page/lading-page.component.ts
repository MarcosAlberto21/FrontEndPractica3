import { Component, OnInit } from '@angular/core';
import { GiftcardService} from 'src/app/services/giftcard.service'
import {giftcard}  from 'src/app/models/giftcard'

@Component({
  selector: 'app-lading-page',
  templateUrl: './lading-page.component.html',
  styleUrls: ['./lading-page.component.css']
})
export class LadingPageComponent implements OnInit {

  constructor(public giftcardService: GiftcardService) { }

  ngOnInit(): void {
    this.getGiftCards();
  }
  giftCards:Array<giftcard>;

  getGiftCards(): void {

    this.giftcardService.getGiftcard(true).subscribe(
      (res:Array<giftcard>)=>{
        this.giftCards = res;
      },
      (err)=>{},
    )
  }

}
