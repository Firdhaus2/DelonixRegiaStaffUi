import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  staffLoginForm : FormGroup
  results: any = false;
  userIncorrect = false;

  constructor(private authService: AuthserviceService, private fb: FormBuilder, private router:Router) { }

  ngOnInit() {
    this.staffLoginForm = this.fb.group ({
      username: '',
      password: ''
    });
  }


  onStaffSubmit() {
    this.authService.authUser(this.staffLoginForm.value.username, this.staffLoginForm.value.userpassword).subscribe(data => {this.results = data;
    if (this.results[0].auth) 
      {
        this.authService.setSecureToken(this.staffLoginForm.value.username);
        this.authService.setUserRole(this.results[0].role);
        this.router.navigateByUrl('/Home');

      }
    else
      {
        this.userIncorrect = true;
      }
    });
  }
}

