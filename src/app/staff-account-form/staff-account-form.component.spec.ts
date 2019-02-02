import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffAccountFormComponent } from './staff-account-form.component';

describe('StaffAccountFormComponent', () => {
  let component: StaffAccountFormComponent;
  let fixture: ComponentFixture<StaffAccountFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffAccountFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffAccountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
