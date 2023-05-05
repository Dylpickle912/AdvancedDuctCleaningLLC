import {Component, OnDestroy, OnInit} from '@angular/core';
import * as $ from 'jquery';
import 'slick-carousel';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private readonly router: Router) { }

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

  public navigateToRequestQuote(): void {
    this.router.navigate(['/request-quote']);
  }
}
