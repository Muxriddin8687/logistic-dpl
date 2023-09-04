import { Component, ChangeDetectionStrategy, ViewEncapsulation, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {
  toggleIcon: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('nav.navbar.sticky-top') as HTMLElement;
    if (window.pageYOffset > 50) {
      element.classList.add('changeTheme');
      this.toggleIcon = true;
    } else {
      element.classList.remove('changeTheme');
      this.toggleIcon = false;
    }
  }



  searchList = [
    {
      key: "Price Auto quote form",
      value: '<a href="/app/services/auto/how-much-does-it-cost">Price</a>',
      label: "Price",
    },
    {
      key: "Freight Cost Freight quote form",
      value: '<a href="/app/services/freight/how-much-does-it-cost/products">Freight Cost</a>',
      label: "Freight Cost",
    },
    {
      key: "Service All services in the customer section",
      value: '<a href="/app/services/auto/how-does-it-work">All services</a>',
      label: "All services",
    },
    {
      key: "Open shipment or open trailer Open car hauler",
      value: '<a href="/app/carriers/auto/open-car-haulers">Open car hauler</a>',
      label: "Open car hauler",
    },
    {
      key: "Enclosed shipment or enclosed trailer Enclosed car hauler",
      value: '<a href="/app/carriers/auto/enclosed-car-haulers">Enclosed car hauler</a>',
      label: "Enclosed car hauler",
    },
    {
      key: "Pick up and delivery dates Q/A QA section Contact US",
      value: '<a href="/app/contact-us">Contact US</a>',
      label: "Contact US",
    },
    {
      key: "Location Our address",
      value: '<a target="_blank" href="https://www.google.com/maps/place/1310+Turk+St+%23208,+San+Francisco,+CA+94115,+USA/@37.7808353,-122.4333834,17z/data=!3m1!4b1!4m6!3m5!1s0x808580bb99565951:0xccbca122559a363b!8m2!3d37.7808311!4d-122.4308085!16s%2Fg%2F11tmvl21mp?entry=ttu">Location</a>',
      label: "Location",
    },
    {
      key: "Contact Phone Email address",
      value: '<a href="/app/contact-us">Contact us</a>',
      label: "Contact US",
    },
    {
      key: "Carriers Carriers page",
      value: '<a href="/app/about-us">About us</a>',
      label: "Carriers page",
    },
    {
      key: "DPL About us page",
      value: '<a href="/app/about-us">About us</a>',
      label: "About us",
    },
    {
      key: "Car shipping How does it work page",
      value: '<a href="/app/services/auto/how-does-it-work">Car shipping</a>',
      label: "Car shipping",
    },
    {
      key: "Freight shipping How does it work page",
      value: '<a href="/app/services/freight/how-does-it-work">Freight shipping</a>',
      label: "Freight shipping",
    },
  ];
  searchResult = this.searchList;
  searchEvent: boolean = false;

  constructor(private translate: TranslateService) { }


  search(text: string) {
    if (text.length > 2) {
      text = text.toLowerCase();
      this.searchResult = this.searchList.filter((item: any) => item.key.toLowerCase().indexOf(text) > -1);
    } else
      this.searchResult = this.searchList;
  }

  focusOut() {
    setTimeout(() => {
      this.searchEvent = false;
    }, 2000);
  }

  selectLanguage(lang: string) {
    this.translate.use(lang);
  }
}
