import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-footer-additional-info',
  templateUrl: './footer-additional-info.component.html',
  styleUrls: ['./footer-additional-info.component.scss']
})
export class FooterAdditionalInfoComponent {
  @Input() public isMobile!: boolean;
}
