import { Component, OnInit } from '@angular/core';
import { StaffRecordsService } from '../staff-records.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StaffAccountsService } from '../staff-accounts.service';



@Component({
  selector: 'app-s-record-form',
  templateUrl: './s-record-form.component.html',
  styleUrls: ['./s-record-form.component.css']
})
export class SRecordFormComponent implements OnInit {

  staffRecords: any = [];
  staffRecordsForm: FormGroup
  
  staffAccounts: any =[];

  constructor(private fb: FormBuilder, private staffRecordsService: StaffRecordsService, private router: Router, private staffAccountsService: StaffAccountsService) {

   }

  ngOnInit() {

    this.staffAccountsService.getStaffAccounts().subscribe(staffAccounts => {
      this.staffAccounts = staffAccounts;
    });

    this.staffRecordsForm = this.fb.group({
      staffId:['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      firstName:['', [Validators.required, Validators.pattern('^[a-zA-Z]+(\s[a-zA-Z]+)?$')]],
      lastName:['', [Validators.required, Validators.pattern('^[a-zA-Z]+(\s[a-zA-Z]+)?$')]],
      staffUsername:['', [Validators.required]],
      mobileNumber:['', [Validators.required, Validators.pattern('(^[0-9]).{7,12}')]],
      homeNumber:['', [Validators.required, Validators.pattern('(^[0-9]).{7,12}')]],
      streetAddress:['', [Validators.required]],
      blockNumber:['', [Validators.required]],
      unitNumber:['', [Validators.required]],
      postalCode:['', [Validators.required, Validators.pattern('(^[0-9]).{5}')]],
      country:['', [Validators.required]],
      duty:['', [Validators.required]],
    });
    
  }

  createStaffRecord() {
    this.staffRecordsService.createStaffRecord(this.staffRecordsForm.value.staffId, this.staffRecordsForm.value.firstName, this.staffRecordsForm.value.lastName, this.staffRecordsForm.value.staffUsername, this.staffRecordsForm.value.mobileNumber,  this.staffRecordsForm.value.homeNumber,  this.staffRecordsForm.value.streetAddress, this.staffRecordsForm.value.blockNumber ,this.staffRecordsForm.value.unitNumber, this.staffRecordsForm.value.postalCode,this.staffRecordsForm.value.country,this.staffRecordsForm.value.duty ).subscribe(staffRecords=> {
      this.staffRecords = staffRecords;
    });
    this.router.navigateByUrl('/SRecord')

}

}