import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentInvoiceRecordComponent } from './payment-invoice-record.component';

describe('PaymentInvoiceRecordComponent', () => {
  let component: PaymentInvoiceRecordComponent;
  let fixture: ComponentFixture<PaymentInvoiceRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentInvoiceRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentInvoiceRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
