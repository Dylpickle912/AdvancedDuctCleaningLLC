import {AfterViewInit, Component, HostListener, OnInit} from '@angular/core';
import * as $ from 'jquery';
import 'slick-carousel';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

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
}
