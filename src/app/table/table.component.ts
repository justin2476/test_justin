import { Component, OnInit } from '@angular/core';
import { SignupService} from '../signup.service';
import { Router } from '@angular/router';


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
  private loginFlag: string;
  constructor(private apiService: SignupService, private router: Router) { }

  ngOnInit() {
    this.loginFlag = sessionStorage.getItem('login');
    if (this.loginFlag === 'false') {
      alert( 'Please login' );
      this.router.navigate(['/']);
    }
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
     if (data === 'work posted') {
       alert('successfully inserted');
       this.apiService.getWork().subscribe( data => this.newData = data );
      }

  });
  }

    console.log(this.action);

  }

}
