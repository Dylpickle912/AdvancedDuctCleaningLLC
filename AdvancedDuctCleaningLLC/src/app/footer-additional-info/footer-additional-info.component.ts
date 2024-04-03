import {Component, Input} from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-footer-additional-info',
    templateUrl: './footer-additional-info.component.html',
    styleUrls: ['./footer-additional-info.component.scss'],
    standalone: true,
    imports: [NgIf, RouterLink]
})
export class FooterAdditionalInfoComponent {
  @Input() public isMobile!: boolean;
}
