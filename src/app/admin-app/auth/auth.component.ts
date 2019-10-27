import { AuthService } from './../../auth.service';
import { LoginUser } from '../model/login-user.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent implements OnInit {
  public loginUser: LoginUser;

  constructor(private router: Router, private authService: AuthService) {
    this.loginUser = new LoginUser();
  }

  ngOnInit() {}

  authentication(form: NgForm) {
    if (form.valid) {
      this.authService
        .authenticate(this.loginUser.username, this.loginUser.password)
        .subscribe(response => {
          if (response) {
            this.router.navigateByUrl('/admin/main');
          }
          this.loginUser.errorMessage = 'Authentication Failed';
        });
    } else {
      this.loginUser.errorMessage = 'Form Data Invalid';
    }
  }
}
