import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GRecordComponent } from './g-record/g-record.component';
import { GRecordFormComponent } from './g-record-form/g-record-form.component';
import { SRecordFormComponent } from './s-record-form/s-record-form.component';
import { SRecordComponent } from './s-record/s-record.component';
import { HomeComponent } from './home/home.component';
import { RoomServiceComponent } from './room-service/room-service.component';
import { BookRecordComponent } from './book-record/book-record.component';
import { BookRecordFormComponent } from './book-record-form/book-record-form.component';
import { ReportComponent } from './report/report.component';
import { PaymentInvoiceRecordComponent } from './payment-invoice-record/payment-invoice-record.component';
import { PaymentInvoiceFormComponent } from './payment-invoice-form/payment-invoice-form.component';
import { GuestAccountComponent } from './guest-account/guest-account.component';
import { StaffAccountComponent } from './staff-account/staff-account.component';
import { StaffAccountFormComponent } from './staff-account-form/staff-account-form.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

import {AuthserviceService} from './authservice.service'


import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    GRecordComponent,
    GRecordFormComponent,
    SRecordFormComponent,
    SRecordComponent,
    HomeComponent,
    RoomServiceComponent,
    BookRecordComponent,
    BookRecordFormComponent,
    ReportComponent,
    PaymentInvoiceRecordComponent,
    PaymentInvoiceFormComponent,
    GuestAccountComponent,
    StaffAccountComponent,
    StaffAccountFormComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
