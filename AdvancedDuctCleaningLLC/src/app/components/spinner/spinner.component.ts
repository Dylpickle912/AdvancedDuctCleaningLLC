import {Component, Input} from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss'],
    standalone: true,
    imports: [NgClass]
})
export class SpinnerComponent {
  @Input() public size: 'Small' | 'Normal' = 'Normal';
}
