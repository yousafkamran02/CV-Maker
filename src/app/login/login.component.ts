import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  LoginForm: FormGroup;
  email: string;
  password: string;
  reg_email: string;
  reg_password: string;
  reg_conpassword: string;
  reg_name: string;

  constructor() {
    this.email = 'admin@admin.com';
    this.password = '1234';
    this.reg_email = '';
    this.reg_password = '';
    this.reg_conpassword = '';
    this.reg_name = '';

    this.LoginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  showLogin = true;

  toggleform() {
    this.showLogin = !this.showLogin;
  }

  emailValid() {
    const emailFormControl = this.LoginForm.get('email');
    if (emailFormControl?.touched && emailFormControl?.invalid) {
      return emailFormControl.hasError('required')
        ? 'Email is required'
        : 'Invalid email format';
    }
    return '';
  }

  passwordValid() {
    const password = this.LoginForm.get('password');
    if (password?.touched && password.invalid) {
      return password.hasError('required')
        ? 'Password is required'
        : 'Incorrect Password';
    }
    return '';
  }

  loginCheck() {
    const email = this.LoginForm.get('email')?.value;
    const password = this.LoginForm.get('password')?.value;

    if (email !== this.email && password !== this.password) {
      this.LoginForm.controls['email'].setErrors({ 'incorrect': true });
      this.LoginForm.controls['password'].setErrors({ 'incorrect': true });
    }
    else if (password !== this.password) {

      this.LoginForm.controls['password'].setErrors({ 'incorrect': true });

    } else {
      console.log('hello');
    }
  }
}
