import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekendParty } from './weekend-party';

describe('WeekendParty', () => {
  let component: WeekendParty;
  let fixture: ComponentFixture<WeekendParty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeekendParty]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekendParty);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
