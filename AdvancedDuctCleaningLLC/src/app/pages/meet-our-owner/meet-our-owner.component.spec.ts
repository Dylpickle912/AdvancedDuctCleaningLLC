import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetOurOwnerComponent } from './meet-our-owner.component';

describe('MeetOurOwnerComponent', () => {
  let component: MeetOurOwnerComponent;
  let fixture: ComponentFixture<MeetOurOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [MeetOurOwnerComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(MeetOurOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
