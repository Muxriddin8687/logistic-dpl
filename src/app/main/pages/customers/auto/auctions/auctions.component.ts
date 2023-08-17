import { ViewportScroller } from '@angular/common';
import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class AuctionsComponent {
  constructor(private scroller: ViewportScroller) {}


  goTo(block: string) {
    this.scroller.scrollToAnchor(block);
  }
}
