import {Component, Input} from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [NgIf, RouterLink]
})
export class HeaderComponent {
  @Input() public isMobile!: boolean;
}
