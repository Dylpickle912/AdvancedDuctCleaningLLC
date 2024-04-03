import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-testimonial',
    templateUrl: './testimonial.component.html',
    styleUrls: ['./testimonial.component.scss'],
    standalone: true
})
export class TestimonialComponent {
  @Input() public image!: string;
  @Input() public comment!: string;
  @Input() public name!: string;
  @Input() public where!: string;
}
