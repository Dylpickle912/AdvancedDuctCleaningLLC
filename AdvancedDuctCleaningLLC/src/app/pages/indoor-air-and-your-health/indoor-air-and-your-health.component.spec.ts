import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndoorAirAndYourHealthComponent } from './indoor-air-and-your-health.component';

describe('IndoorAirAndYourHealthComponent', () => {
  let component: IndoorAirAndYourHealthComponent;
  let fixture: ComponentFixture<IndoorAirAndYourHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndoorAirAndYourHealthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndoorAirAndYourHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
