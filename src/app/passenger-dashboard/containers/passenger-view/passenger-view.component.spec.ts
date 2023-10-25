import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerViewComponent } from './passenger-view.component';

describe('PassengerViewComponent', () => {
  let component: PassengerViewComponent;
  let fixture: ComponentFixture<PassengerViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassengerViewComponent]
    });
    fixture = TestBed.createComponent(PassengerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
