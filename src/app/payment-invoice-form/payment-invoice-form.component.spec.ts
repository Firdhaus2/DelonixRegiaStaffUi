import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentInvoiceFormComponent } from './payment-invoice-form.component';

describe('PaymentInvoiceFormComponent', () => {
  let component: PaymentInvoiceFormComponent;
  let fixture: ComponentFixture<PaymentInvoiceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentInvoiceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentInvoiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
