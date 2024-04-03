import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { MainVideoComponent } from './main-video/main-video.component';

@Component({
    selector: 'app-mobile',
    templateUrl: './mobile.component.html',
    styleUrls: ['./mobile.component.scss'],
    standalone: true,
    imports: [MainVideoComponent, TestimonialComponent, MatExpansionModule, NgIf, RouterLink]
})
export class MobileComponent {
  public isOpen1!: boolean;
  public isOpen2!: boolean;
  public isOpen3!: boolean;
  public isOpen4!: boolean;
  public isOpen5!: boolean;
  public isOpen6!: boolean;
  public isOpen7!: boolean;
  public isOpen8!: boolean;
}
