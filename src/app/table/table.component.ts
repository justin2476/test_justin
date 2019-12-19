import { Component, OnInit } from '@angular/core';
import { SignupService} from '../signup.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  private newData: any;
  postView: any;
  private medops = '';
  private action = '';
  private status = '';
  private comment = '';
  constructor(private apiService: SignupService) { }

  ngOnInit() {
    this.apiService.getWork().subscribe(data => this.newData = data );
  }
  myFunction() {

    const obj = {medId: this.medops,
    action: this.action,
    status: this.status,
    comment: this.comment
  };
    if (obj) {
    // this.apiService.postWork(obj).subscribe(() => this.apiService.getWork().subscribe(data => this.newData = data) );
   this.postView = this.apiService.postWork(obj);

   this.postView.subscribe((data: any) => {
     if (data == 'work posted') {
       alert('successfully inserted');
       this.apiService.getWork().subscribe(data => this.newData = data );
      }

  });
  }

    console.log(this.action);

  }

}
