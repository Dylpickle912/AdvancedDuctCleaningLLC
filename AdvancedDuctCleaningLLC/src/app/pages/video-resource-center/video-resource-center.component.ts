import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import { RouterLink } from '@angular/router';
import 'slick-carousel'

@Component({
    selector: 'app-video-resource-center',
    templateUrl: './video-resource-center.component.html',
    styleUrls: ['./video-resource-center.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class VideoResourceCenterComponent implements OnInit {
  public ngOnInit() {
    $('.sliderV').slick({
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
