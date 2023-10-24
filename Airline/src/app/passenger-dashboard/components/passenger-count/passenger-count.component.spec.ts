import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerCountComponent } from './passenger-count.component';

describe('PassengerCountComponent', () => {
  let component: PassengerCountComponent;
  let fixture: ComponentFixture<PassengerCountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassengerCountComponent]
    });
    fixture = TestBed.createComponent(PassengerCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
