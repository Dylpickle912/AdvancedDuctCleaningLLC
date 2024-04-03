import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import 'slick-carousel';

@Component({
  selector: 'app-why-clean-air-ducts',
  templateUrl: './why-clean-air-ducts.component.html',
  styleUrls: ['./why-clean-air-ducts.component.scss']
})
export class WhyCleanAirDuctsComponent implements OnInit {
  public ngOnInit() {
    $('.sliderC').slick({
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
}
