import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsbestosComponent } from './asbestos.component';

describe('AsbestosComponent', () => {
  let component: AsbestosComponent;
  let fixture: ComponentFixture<AsbestosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AsbestosComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(AsbestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
