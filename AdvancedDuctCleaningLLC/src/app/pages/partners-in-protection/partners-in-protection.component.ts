import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
    selector: 'app-partners-in-protection',
    templateUrl: './partners-in-protection.component.html',
    styleUrls: ['./partners-in-protection.component.scss'],
    standalone: true,
    imports: [MatExpansionModule, NgIf]
})
export class PartnersInProtectionComponent {
  public isOpen1 = false;
  public isOpen2 = false;
  public isOpen3 = false;
  public isOpen4 = false;
  public isOpen5 = false;
}
