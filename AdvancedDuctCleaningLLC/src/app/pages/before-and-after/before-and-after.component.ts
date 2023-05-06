import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import 'slick-carousel';

@Component({
  selector: 'app-before-and-after',
  templateUrl: './before-and-after.component.html',
  styleUrls: ['./before-and-after.component.scss']
})
export class BeforeAndAfterComponent implements OnInit {
  public ngOnInit() {
    $('.sliderB').slick({
      autoplay: true,
      arrows: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      speed: 300,
      fade: true,
      cssEase: 'linear',
      prevArrow: $('.prevButton'),
      nextArrow: $('.nextButton')
    });
  }
}
