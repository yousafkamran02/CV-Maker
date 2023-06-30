import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  disableToDate = false;
  showedu = false;
  showexp = false;
  showtco = false;
  showpro = false;
  years: number[] = [];

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
  
}
