import {Component, OnDestroy, OnInit} from '@angular/core';
import * as $ from 'jquery';
import 'slick-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public ngOnInit() {
    $('.slider').slick({
      autoplay: true,
      arrows: true,
      dots: false,
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

  public ngOnDestroy() {

  }
}
