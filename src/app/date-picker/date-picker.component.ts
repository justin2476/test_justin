// import { Component, OnInit } from '@angular/core';

// @Component({
  // selector: 'app-date-picker',
  // templateUrl: './date-picker.component.html',
  // styleUrls: ['./date-picker.component.css']
// })
// export class DatePickerComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import {Component} from '@angular/core';
import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
  
})
export class DatePickerComponent {

  hoveredDate: NgbDate;

  fromDate: NgbDate;
  toDate: NgbDate;

  constructor(calendar: NgbCalendar) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
    var dateFix=function(dates) {
if(dates<10)
dates='0'+dates
return dates
    }
    
  if(this.fromDate&&this.toDate){
var fromDateString='';
fromDateString=fromDateString+this.fromDate.year+'-'+dateFix(this.fromDate.month)+'-'+dateFix(this.fromDate.day)+"T18:30:00.00Z"
var toDateString='';
toDateString=toDateString+this.toDate.year+'-'+dateFix(this.toDate.month)+'-'+dateFix(this.toDate.day)+"T18:30:00.00Z"
localStorage.setItem('fromDate',fromDateString);
localStorage.setItem('toDate',toDateString);

  }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }


}

