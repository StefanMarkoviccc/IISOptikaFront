import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeAppointmentComponent } from './see-appointment.component';

describe('SeeAppointmentComponent', () => {
  let component: SeeAppointmentComponent;
  let fixture: ComponentFixture<SeeAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
