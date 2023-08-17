import { ViewportScroller } from '@angular/common';
import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-online-car-buyers',
  templateUrl: './online-car-buyers.component.html',
  styleUrls: ['./online-car-buyers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class OnlineCarBuyersComponent {

  constructor(private scroller: ViewportScroller) {}


  goTo(block: string) {
    this.scroller.scrollToAnchor(block);
  }
}
