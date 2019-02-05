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

  constructor(private fb: FormBuilder, private staffRecordsService: StaffRecordsService, private router: Router) { 

  this.staffRecordsService.getStaffRecords().subscribe(staffRecords => {
    this.staffRecords = staffRecords;
  });
}

  ngOnInit() {
  }

}
