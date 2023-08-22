import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { environment } from 'src/environments/environment';

declare let Swiper: any;

@Component({
  selector: 'app-news-carousel',
  templateUrl: './news-carousel.component.html',
  styleUrls: ['./news-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class NewsCarouselComponent implements AfterViewInit {
  newsList: any;
  api = environment.api + 'news/getAll.php';
  path = environment.api + 'assets/images/news/';


  constructor(private _http: HttpClient) { }


  ngOnInit() {
    this._http.get(this.api).subscribe((res) => this.newsList = res);
  }


  ngAfterViewInit(): void {
    let inter = setInterval(() => {
      if (this.newsList.length > 1) {
        let swiper = new Swiper('#reviews .swiper', {
          loop: true,
          centeredSlides: false,
          grabCursor: true,
          spaceBetween: 30,
          slidesPerView: 1,
          // speed: 2000,
          // autoplay: {
          //   delay: 3000,
          //   disableOnInteraction: false,
          // },
          pagination: {
            el: '#reviews .swiper-pagination',
            type: 'bullets',
          }
        });

        clearInterval(inter);
      }
    }, 1000);
  }
}
