import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import 'slick-carousel';

@Component({
    selector: 'app-video-resources-carousel',
    templateUrl: './video-resources-carousel.component.html',
    styleUrls: ['./video-resources-carousel.component.scss'],
    standalone: true
})
export class VideoResourcesCarouselComponent implements OnInit {
  public ngOnInit() {
    $('.carousel').slick({
      autoplay: true,
      arrows: false,
      dots: false,
      speed: 9000,
      autoplaySpeed: 0,
      cssEase: 'linear',
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      infinite: true
    });
  }
}
