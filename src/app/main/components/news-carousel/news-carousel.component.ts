import { AfterViewInit, Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

declare let Swiper: any;

@Component({
  selector: 'app-news-carousel',
  templateUrl: './news-carousel.component.html',
  styleUrls: ['./news-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class NewsCarouselComponent implements AfterViewInit {

  reviews: any = [
    {
      id: 1,
      fullname: "John Doe",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident hic sit labore sapiente iusto. Possimus accusantium veritatis et maxime ullam unde.",
      date: "12.03.2023",
      logo: "group.png"
    }
  ];

  ngAfterViewInit(): void {
    let swiper = new Swiper('#reviews .swiper', {
      loop: true,
      centeredSlides: false,
      grabCursor: true,
      spaceBetween: 30,
      // slidesPerView: 1,
      speed: 2000,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '#reviews .swiper-pagination',
        type: 'bullets',
      },
      breakpoints: {
        1400: {
          slidesPerView: 3,
        },
        770: {
          slidesPerView: 2.5,
        },
        500: {
          slidesPerView: 1.7,
        },
        400: {
          slidesPerView: 1.2,
        }
      }
    });
  }
}
