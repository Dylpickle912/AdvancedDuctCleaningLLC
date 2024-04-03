import { Component } from '@angular/core';
import { VideoResourcesCarouselComponent } from './video-resources-carousel/video-resources-carousel.component';

@Component({
    selector: 'app-video-resources',
    templateUrl: './video-resources.component.html',
    styleUrls: ['./video-resources.component.scss'],
    standalone: true,
    imports: [VideoResourcesCarouselComponent]
})
export class VideoResourcesComponent {

}
