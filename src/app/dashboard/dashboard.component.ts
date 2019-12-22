import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  display=false;
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    if(this.display==false)
this.display=true;
else
{
  console.log(localStorage.getItem("fromDate"))

  this.display=false;
} 
}

}
