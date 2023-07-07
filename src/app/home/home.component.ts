import { Component } from '@angular/core';
import { User } from '../share/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loggedInUser: User | undefined;
  disableToDate = false;
  showedu = false;
  showexp = false;
  showtco = false;
  showpro = false;
  years: number[] = [];
  eduforms:any[]=[1];
  expforms:any[]=[1];
  tcforms:any[]=[1];
  pforms:any[]=[1];
  constructor() {
    // Populate the years array
    for (let year = 1999; year <= 2023; year++) {
      this.years.push(year);
    }
  }
  

  isEndDateDisabled=false;
  togglendDate(){
    this.isEndDateDisabled=!this.isEndDateDisabled;
  }
  toggleToDate() {
    this.disableToDate = !this.disableToDate;
  }

  toggleregform() {
    this.showedu = !this.showedu;
  }

  toggleexpform() {
    this.showexp = !this.showexp;
  }

  toggletcoform() {
    this.showtco = !this.showtco;
  }

  toggleproform() {
    this.showpro = !this.showpro;
  }
  addAnotherEducation(){
    this.eduforms.push({});
  }
  addAnotherExp(){
    this.expforms.push({});
  }
  addAnothertc(){
    this.tcforms.push({});
  }
  addAnotherp(){
    this.pforms.push({});
  }
  removetc(){
    this.tcforms.pop();
  }
  removep(){
    this.pforms.pop();
  }
  removeExp(){
    this.expforms.pop();
  }
  removeEducation(){
    this.eduforms.pop();
  }
 }
