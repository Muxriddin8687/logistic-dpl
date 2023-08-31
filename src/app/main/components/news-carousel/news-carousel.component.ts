import { AfterViewInit, Component, ChangeDetectionStrategy, ViewEncapsulation, computed } from '@angular/core';
import { ActivityService } from 'src/app/core/services/activity.service';
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
  newsList = computed(() => this._newsService.news());
  path = environment.api + 'assets/images/news/';

  constructor(private _newsService: ActivityService) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      let swiper = new Swiper('#reviews .swiper', {
        loop: true,
        centeredSlides: false,
        grabCursor: true,
        spaceBetween: 30,
        slidesPerView: 1,
        speed: 2000,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '#reviews .swiper-pagination',
          type: 'bullets',
        }
      });
    }, 2000);
  }
}
