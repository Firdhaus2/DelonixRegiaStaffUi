import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestAccountComponent } from './guest-account.component';

describe('GuestAccountComponent', () => {
  let component: GuestAccountComponent;
  let fixture: ComponentFixture<GuestAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
