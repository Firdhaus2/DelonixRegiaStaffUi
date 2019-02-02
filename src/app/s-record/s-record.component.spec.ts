import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SRecordComponent } from './s-record.component';

describe('SRecordComponent', () => {
  let component: SRecordComponent;
  let fixture: ComponentFixture<SRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
