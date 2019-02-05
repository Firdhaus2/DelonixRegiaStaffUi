import { Component, OnInit } from '@angular/core';
import { StaffRecordsService } from '../staff-records.service'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-s-record',
  templateUrl: './s-record.component.html',
  styleUrls: ['./s-record.component.css']
})
export class SRecordComponent implements OnInit {

  staffRecords: any = [];
  searchStaffRecordForm: FormGroup

  constructor(private fb: FormBuilder, private staffRecordsService: StaffRecordsService, private router: Router) { 

  this.staffRecordsService.getStaffRecords().subscribe(staffRecords => {
    this.staffRecords = staffRecords;
  });
}

  ngOnInit() {
    this.searchStaffRecordForm = this.fb.group ({
      staffId: ''
      });
  }

  searchStaffRecord(){
    this.staffRecordsService.searchStaffRecords(this.searchStaffRecordForm.value.staffId).subscribe(staffRecords => {
      this.staffRecords = staffRecords;
    });
  }
}
