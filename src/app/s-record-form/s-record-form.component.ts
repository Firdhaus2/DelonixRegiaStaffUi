import { Component, OnInit } from '@angular/core';
import { StaffRecordsService } from '../staff-records.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-s-record-form',
  templateUrl: './s-record-form.component.html',
  styleUrls: ['./s-record-form.component.css']
})
export class SRecordFormComponent implements OnInit {

  staffRecords: any = [];
  staffRecordsForm: FormGroup

  constructor(private fb: FormBuilder, private staffRecordsService: StaffRecordsService, private router: Router) { }

  ngOnInit() {
    this.staffRecordsForm = this.fb.group({
      firstName:'',
      lastName:'',
      staffUsername:'',
      mobileNumber:'',
      homeNumber:'',
      streetAddress:'',
      blockNumber:'',
      unitNumber:'',
      postalCode:'',
      country:'',
      duty:'',
    });
    
  }

  createStaffRecord() {
    this.staffRecordsService.createStaffRecord(this.staffRecordsForm.value.firstName, this.staffRecordsForm.value.lastName, this.staffRecordsForm.value.staffUsername, this.staffRecordsForm.value.mobileNumber,  this.staffRecordsForm.value.homeNumber,  this.staffRecordsForm.value.streetAddress, this.staffRecordsForm.value.blockNumber ,this.staffRecordsForm.value.unitNumber, this.staffRecordsForm.value.postalCode,this.staffRecordsForm.value.country,this.staffRecordsForm.value.duty ).subscribe(staffRecords=> {
      this.staffRecords = staffRecords;
    });
    //this.router.navigateByUrl('/SRecord')

}

}