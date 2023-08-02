import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

declare let Swiper: any;

@Component({
  selector: 'app-how-does-auto',
  templateUrl: './how-does.component.html',
  styleUrls: ['./how-does.component.scss']
})
export class HowDoesComponent {

  constructor() { }


  send(form: NgForm) {
    console.log(form.value);
    form.onReset();
  }

  ngAfterViewInit(): void {
    let swiper = new Swiper('#block-carousel .swiper', {
      loop: true,
      centeredSlides: false,
      grabCursor: true,
      spaceBetween: 30,
      speed: 2000,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '#block-carousel .swiper-pagination',
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
