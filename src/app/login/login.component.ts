import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../share/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  LoginForm: FormGroup;
  RegForm: FormGroup;
  email: string;
  password: string;
  reg_email: string;
  reg_password: string;
  reg_conpassword: string;
  reg_name: string;

  constructor(private router: Router, public userService:UserService) {

    this.reg_email = '';
    this.reg_password = '';
    this.reg_conpassword = '';
    this.reg_name = '';
    this.LoginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
    this.RegForm = new FormGroup({
      reg_email: new FormControl('', [Validators.required, Validators.email]),
      reg_password: new FormControl('', Validators.required),
      reg_conpassword: new FormControl('', Validators.required),
      reg_name: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.userService.getUser().subscribe(data=>{
      this.userService.listUsers=data;
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
    const user=this.userService.listUsers.find(
      (u)=>u.Email==email&&u.Password==password
    );
    if (!user) {
      this.LoginForm.controls['email'].setErrors({ 'incorrect': true });
      this.LoginForm.controls['password'].setErrors({ 'incorrect': true });
    } else if (password !== user.Password) {
      this.LoginForm.controls['password'].setErrors({ 'incorrect': true });
    } else {
      // Route to the home page
      this.router.navigate(['/home']);
    }
  }
  isNameValid() {

    const reg_name = this.RegForm.get('reg_name');
    if (reg_name?.value.length < 2 && reg_name?.touched) {
      return reg_name.hasError('required')
        ? 'Name is Required'
        : 'Please Enter Your Full Name';
    }
    return '';

  }
  isRegemailValid() {
    const reg_email = this.RegForm.get('reg_email');
    if (reg_email?.touched && reg_email?.invalid) {
      return reg_email.hasError('required')
        ? 'Email is required'
        : 'Invalid email format';
    }
    return '';
  }
isRegpasswordValid() {
  const reg_password = this.RegForm.get('reg_password');
    if (reg_password?.touched && reg_password.invalid) {
      return reg_password.hasError('required')
        ? 'Password is required'
        : 'Incorrect Password';
    }
    return '';
  }
isMatch() {
  const reg_conpassword = this.RegForm.get('reg_conpassword');
  const reg_password = this.RegForm.get('reg_password');
    if (reg_conpassword?.touched && reg_conpassword.value!==reg_password?.value) {
      return reg_conpassword.hasError('required')
        ? 'Password is required'
        : 'Passwords donot match';
    }
    return '';
  }
  register() {
    if (this.RegForm.invalid) {
      // Mark all fields as touched to display validation errors
      this.RegForm.markAllAsTouched();
      return;
    }
  
    if (this.isMatch()) {
      this.RegForm.controls['reg_conpassword'].setErrors({ 'incorrect': true });
      return;
    }
  
    // Extract form values
    const email = this.RegForm.get('reg_email')?.value;
    const password = this.RegForm.get('reg_password')?.value;
    const name = this.RegForm.get('reg_name')?.value;
    console.log(`Email: ${email}; Password: ${password}; Name: ${name}`);

    // Perform registration logic or any other actions
  
    // Route to the home page or toggle the form if needed
    this.toggleform();
  }
  
}
