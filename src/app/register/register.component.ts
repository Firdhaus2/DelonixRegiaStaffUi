import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminCodeValidation } from '../custom.validator';
import { RoleValidation } from '../custom.validator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

staffRegisterForm : FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthserviceService, private router: Router) {
   }

  ngOnInit() {

    this.staffRegisterForm = this.fb.group ({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      adminCode: ['', [Validators.required, AdminCodeValidation]],
      role: ['', [Validators.required, RoleValidation]]
      });

  }
  onStaffSubmit() {
    this.authService.regStaffUser(this.staffRegisterForm.value.username, this.staffRegisterForm.value.password, this.staffRegisterForm.value.role).subscribe();
    this.router.navigateByUrl('/Login');
    }
}
