import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import 'slick-carousel'

@Component({
  selector: 'app-video-resource-center',
  templateUrl: './video-resource-center.component.html',
  styleUrls: ['./video-resource-center.component.scss']
})
export class VideoResourceCenterComponent implements OnInit {
  public ngOnInit() {
    $('.slider').slick({
      autoplay: false,
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
