import { Component, OnInit } from '@angular/core';
import {formatDate } from '@angular/common';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  today= new Date();
  jstoday = '';
  disableSelect = new FormControl(false);
 

  Quarters = [{
    code: 1, name: '(FY2025-Q1)'
  }, {
    code: 2, name: '(FY2025-Q2)'
  }, {
    code: 3, name: '(FY2025-Q3)'
  }, {
    code: 4, name: '(FY2025-Q4)'
  }]
  data = {
    Years: [{
      Year: 2025
    }]
  }
  
  constructor() {
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy', 'en-US', '+0530');
    
  }

  ngOnInit(): void {
  }

}
