import {AfterViewInit, Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import * as $ from 'jquery';
import 'slick-carousel';
import {Router} from "@angular/router";
import { MobileComponent } from '../../mobile/mobile.component';
import { VideoResourcesCarouselComponent } from '../../video-resources/video-resources-carousel/video-resources-carousel.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [NgIf, VideoResourcesCarouselComponent, MobileComponent]
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  public isMobile!: boolean;

  constructor(private readonly router: Router) { }

  public ngOnInit() {
    this.checkIfIsMobile(window.innerWidth);
  }

  public ngAfterViewInit() {
    /*
    $('.homeSlider').slick({
      autoplay: true,
      arrows: true,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      speed: 300,
      fade: true,
      cssEase: 'linear',
      prevArrow: $('#prevButton'),
      nextArrow: $('#nextButton')
    });
    */
  }

  public navigateToRequestQuote(): void {
    this.router.navigate(['/request-quote']);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkIfIsMobile(event.target.innerWidth);
  }

  public checkIfIsMobile(size: number): void {
    this.isMobile = size < 500;
  }

  public ngOnDestroy() {
    document.removeEventListener('resize', this.onResize);
  }
}
