import { Component, OnInit, ElementRef, Renderer, Input, AfterViewInit, AfterViewChecked } from '@angular/core';


@Component({

  selector: 'app-image-slider',

  templateUrl: './image-slider.component.html',

  styleUrls: ['./image-slider.component.css']

})

export class ImageSliderComponent implements OnInit, AfterViewChecked {

  @Input() imagesData;

  slideIndex = 1;

  constructor(private el: ElementRef,
    private renderer: Renderer) { }


  ngOnInit() {
  }


  ngAfterViewChecked () {

    this.showSlides(1);

  }


  showSlides(n) {

    let i;

    const slides = this.el.nativeElement.querySelectorAll('.mySlides');

    const dots = this.el.nativeElement.querySelectorAll('.dot');

    if (n > slides.length) {

      this.slideIndex = 1;

    }

    if (n < 1) {

      this.slideIndex = slides.length;

    }

    for (i = 0; i < slides.length; i++) {

      this.renderer.setElementStyle(slides[i], 'display', 'none');

    }

    for (i = 0; i < dots.length; i++) {

      dots[i].className = dots[i].className.replace(' active', '');

    }

    this.renderer.setElementStyle(slides[this.slideIndex - 1], 'display', 'block');

    dots[this.slideIndex - 1].className += ' active';

  }
  plusSlides(n) {

    this.showSlides(this.slideIndex += n);

  }

  currentSlide(n) {

    this.showSlides(this.slideIndex = n);

  }


}
