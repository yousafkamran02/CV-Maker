import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  LoginForm: FormGroup;
  RegForm: FormGroup;
  email:string;
  password:string;
  reg_email:string;
  reg_password:string;
  reg_conpassword:string;
  reg_name:string;
  constructor() {
    this.email='';
    this.password='';
    this.reg_email='';
    this.reg_password='';
    this.reg_conpassword='';
    this.reg_name='';
    
    this.LoginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
    this.RegForm = new FormGroup({
      reg_email: new FormControl('', [Validators.required, Validators.email]),
      reg_password: new FormControl('', Validators.required),
      reg_conpassword: new FormControl('', Validators.required),
      reg_name: new FormControl('', Validators.required)
    });
  }
  showLogin=true;
  toggleform()
  {
    this.showLogin=!this.showLogin;
  }
  onSubmitReg(){
    this.reg_email=this.RegForm.get('reg_email')?.value;
    this.reg_password=this.RegForm.get('reg_password')?.value;
    this.reg_conpassword=this.RegForm.get('reg_conpassword')?.value;
    this.reg_name=this.RegForm.get('reg_name')?.value;
    

    console.log(this.reg_email,this.reg_password,this.reg_name);
  }
  onSubmit() {
    this.email=this.LoginForm.get('email')?.value;
    this.password=this.LoginForm.get('password')?.value;
    
    console.log(this.email,this.password);
  }
}
