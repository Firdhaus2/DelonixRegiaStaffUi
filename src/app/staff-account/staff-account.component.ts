import { Component, OnInit } from '@angular/core';
import { StaffAccountsService } from '../staff-accounts.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-staff-account',
  templateUrl: './staff-account.component.html',
  styleUrls: ['./staff-account.component.css']
})
export class StaffAccountComponent implements OnInit {

  staffAccounts: any = [];

  constructor(private fb: FormBuilder, private staffAccountsService: StaffAccountsService, private router: Router) { 

    this.staffAccountsService.getStaffAccounts().subscribe(staffAccounts => {
      this.staffAccounts = staffAccounts;
    });

  }

  ngOnInit() {
  }

}
