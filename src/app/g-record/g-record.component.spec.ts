import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GRecordComponent } from './g-record.component';

describe('GRecordComponent', () => {
  let component: GRecordComponent;
  let fixture: ComponentFixture<GRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
