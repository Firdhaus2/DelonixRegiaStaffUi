import { Component, OnInit } from '@angular/core';
import { StaffAccountsService } from '../staff-accounts.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-staff-account-form',
  templateUrl: './staff-account-form.component.html',
  styleUrls: ['./staff-account-form.component.css']
})
export class StaffAccountFormComponent implements OnInit {
  constructor() {

  }
  ngOnInit() {
  }

}
