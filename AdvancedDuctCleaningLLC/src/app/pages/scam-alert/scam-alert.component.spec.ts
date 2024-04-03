import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScamAlertComponent } from './scam-alert.component';

describe('ScamAlertComponent', () => {
  let component: ScamAlertComponent;
  let fixture: ComponentFixture<ScamAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ScamAlertComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(ScamAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
