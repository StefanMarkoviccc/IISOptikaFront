import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkingHourComponent } from './add-working-hour.component';

describe('AddWorkingHourComponent', () => {
  let component: AddWorkingHourComponent;
  let fixture: ComponentFixture<AddWorkingHourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWorkingHourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWorkingHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
