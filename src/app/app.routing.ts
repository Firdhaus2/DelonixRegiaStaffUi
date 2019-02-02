import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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


const appRoutes: Routes = [
 { path: 'GRecord', component: GRecordComponent },
 { path: 'GRecordForm', component: GRecordFormComponent },
 { path: 'SRecordForm', component: SRecordFormComponent },
 { path: 'SRecord', component: SRecordComponent },
 { path: 'Home', component: HomeComponent },
 { path: 'RoomService', component: RoomServiceComponent },
 { path: 'BookRecord', component: BookRecordComponent },
 { path: 'BookRecordForm', component: BookRecordFormComponent },
 { path: 'Report', component: ReportComponent },
 { path: 'PaymentInvoiceRecord', component: PaymentInvoiceRecordComponent },
 { path: 'PaymentInvoiceForm', component: PaymentInvoiceFormComponent },
 { path: 'GuestAccount', component: GuestAccountComponent },
 { path: 'StaffAccount', component: StaffAccountComponent },
 { path: 'StaffAccountForm', component: StaffAccountFormComponent },
 { path: 'Login', component: LoginComponent },
 { path: 'Logout', component: LogoutComponent },


 { path: '', component: LoginComponent, pathMatch: 'full'}
];
export const routing: ModuleWithProviders =
RouterModule.forRoot(appRoutes);