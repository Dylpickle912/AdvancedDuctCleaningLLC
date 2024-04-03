import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoResourcesCarouselComponent } from './video-resources-carousel.component';

describe('VideoResourcesCarouselComponent', () => {
  let component: VideoResourcesCarouselComponent;
  let fixture: ComponentFixture<VideoResourcesCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [VideoResourcesCarouselComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(VideoResourcesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
