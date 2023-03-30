import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplaySpeed: 600,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }


  slides = [
    { id: 1, img: "assets/images/sliders1.jpg" },
    { id: 2, img: "assets/images/sliders2.jpg" },
    { id: 3, img: "assets/images/sliders3.jpg" },
    { id: 4, img: "assets/images/sliders4.jpg" },
    { id: 5, img: "assets/images/sliders5.jpg" },
  ];
}
