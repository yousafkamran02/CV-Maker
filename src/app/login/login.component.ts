import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  LoginForm: FormGroup;
  email:string;
  password:string;
  constructor() {
    this.email='';
    this.password='';
    this.LoginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.email=this.LoginForm.get('email')?.value;
    this.password=this.LoginForm.get('password')?.value;
    
    console.log(this.email,this.password);
  }
}
