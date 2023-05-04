import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersInProtectionComponent } from './partners-in-protection.component';

describe('PartnersInProtectionComponent', () => {
  let component: PartnersInProtectionComponent;
  let fixture: ComponentFixture<PartnersInProtectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnersInProtectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnersInProtectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
