import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAdditionalInfoComponent } from './footer-additional-info.component';

describe('FooterAdditionalInfoComponent', () => {
  let component: FooterAdditionalInfoComponent;
  let fixture: ComponentFixture<FooterAdditionalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterAdditionalInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterAdditionalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
