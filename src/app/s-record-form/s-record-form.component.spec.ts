import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SRecordFormComponent } from './s-record-form.component';

describe('SRecordFormComponent', () => {
  let component: SRecordFormComponent;
  let fixture: ComponentFixture<SRecordFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SRecordFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SRecordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
