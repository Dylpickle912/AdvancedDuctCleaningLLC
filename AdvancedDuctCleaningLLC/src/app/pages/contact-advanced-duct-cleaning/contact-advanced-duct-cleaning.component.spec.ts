import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAdvancedDuctCleaningComponent } from './contact-advanced-duct-cleaning.component';

describe('ContactAdvancedDuctCleaningComponent', () => {
  let component: ContactAdvancedDuctCleaningComponent;
  let fixture: ComponentFixture<ContactAdvancedDuctCleaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactAdvancedDuctCleaningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactAdvancedDuctCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
