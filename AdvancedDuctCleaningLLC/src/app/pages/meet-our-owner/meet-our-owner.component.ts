import { Component } from '@angular/core';
import {Meta} from "@angular/platform-browser";

@Component({
    selector: 'app-meet-our-owner',
    templateUrl: './meet-our-owner.component.html',
    styleUrls: ['./meet-our-owner.component.scss'],
    standalone: true
})
export class MeetOurOwnerComponent {

  constructor(private readonly meta: Meta) {
    meta.updateTag({name: 'title', content: 'Scott Crull | Advanced Duct Cleaning LLC'});
    meta.updateTag({property: 'og:title', content: 'Scott Crull | Advanced Duct Cleaning LLC'});
    meta.updateTag({name: 'description', content: 'Click here to learn more about Scott Crull, the Veteran owner of Advanced Duct Cleaning. Scott Crull loves serving the people of Indiana'});
    meta.updateTag({property: 'og:description', content: 'Click here to learn more about Scott Crull, the Veteran owner of Advanced Duct Cleaning. Scott Crull loves serving the people of Indiana'});
  }
}
