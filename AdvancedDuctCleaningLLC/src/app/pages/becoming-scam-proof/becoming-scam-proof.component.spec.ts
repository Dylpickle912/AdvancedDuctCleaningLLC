import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomingScamProofComponent } from './becoming-scam-proof.component';

describe('BecomingScamProofComponent', () => {
  let component: BecomingScamProofComponent;
  let fixture: ComponentFixture<BecomingScamProofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [BecomingScamProofComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(BecomingScamProofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
