import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GRecordFormComponent } from './g-record-form.component';

describe('GRecordFormComponent', () => {
  let component: GRecordFormComponent;
  let fixture: ComponentFixture<GRecordFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GRecordFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GRecordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
