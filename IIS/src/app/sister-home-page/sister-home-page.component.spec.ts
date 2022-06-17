import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisterHomePageComponent } from './sister-home-page.component';

describe('SisterHomePageComponent', () => {
  let component: SisterHomePageComponent;
  let fixture: ComponentFixture<SisterHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SisterHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SisterHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
