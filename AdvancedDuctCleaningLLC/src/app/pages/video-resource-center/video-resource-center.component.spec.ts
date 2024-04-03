import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoResourceCenterComponent } from './video-resource-center.component';

describe('VideoResourceCenterComponent', () => {
  let component: VideoResourceCenterComponent;
  let fixture: ComponentFixture<VideoResourceCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [VideoResourceCenterComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(VideoResourceCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
