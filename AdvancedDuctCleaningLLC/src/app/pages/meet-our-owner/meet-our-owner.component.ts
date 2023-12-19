import { Component } from '@angular/core';
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-meet-our-owner',
  templateUrl: './meet-our-owner.component.html',
  styleUrls: ['./meet-our-owner.component.scss']
})
export class MeetOurOwnerComponent {

  constructor(private readonly meta: Meta) {
    meta.addTag({
      name: 'Scott Crull',
      content: 'Scott Crull',
      description: 'Click here to learn more about Scott Crull, the Veteran owner of Advanced Duct Cleaning. Scott Crull loves serving the people of Indiana'
    })
  }
}
