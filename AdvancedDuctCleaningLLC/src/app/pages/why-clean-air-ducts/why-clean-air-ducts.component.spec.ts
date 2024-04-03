import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyCleanAirDuctsComponent } from './why-clean-air-ducts.component';

describe('WhyCleanAirDuctsComponent', () => {
  let component: WhyCleanAirDuctsComponent;
  let fixture: ComponentFixture<WhyCleanAirDuctsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [WhyCleanAirDuctsComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(WhyCleanAirDuctsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
