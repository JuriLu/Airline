import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerDetailComponent } from './passenger-detail.component';

describe('PassengerDetailComponent', () => {
  let component: PassengerDetailComponent;
  let fixture: ComponentFixture<PassengerDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassengerDetailComponent]
    });
    fixture = TestBed.createComponent(PassengerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
