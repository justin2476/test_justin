import { Component, OnInit } from '@angular/core';
import { SignupService} from '../signup.service';
import { Router } from '@angular/router';
// import { NgbActiveModal, NgbModal,NgbPopover } from '@ng-bootstrap/ng-bootstrap';


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
  private medopsE = '';
  private actionE = '';
  private statusE = '';
  private commentE = '';
  private loginFlag: string;
  private editable = false;
  private editId='';
  private mobile=';'
  constructor(private apiService: SignupService, private router: Router) { }

  ngOnInit() {
    this.loginFlag = sessionStorage.getItem('login');
    if (this.loginFlag === 'false') {
      alert( 'Please login' );
      this.router.navigate(['/']);
    }else{
       this.mobile = sessionStorage.getItem('mobile')
    }
    this.apiService.getWork(this.mobile).subscribe(data => this.newData = data );
  }
  myFunction() {

    const obj = {medId: this.medops,
    action: this.action,
    status: this.status,
    comment: this.comment,
    mobile:this.mobile
  };
    if (obj) {
    // this.apiService.postWork(obj).subscribe(() => this.apiService.getWork(this.mobile).subscribe(data => this.newData = data) );
   this.postView = this.apiService.postWork(obj);

   this.postView.subscribe((data: any) => {
     if (data === 'work posted') {
       alert('successfully inserted');
       this.apiService.getWork(this.mobile).subscribe( data => this.newData = data );
      }

  });
  }

    console.log(this.action);

  }

  edit(cust){
    this.editable=true; 
    this.editId=cust._id;
    this.medopsE=cust.medId;
    this.actionE=cust.action;
    this.commentE=cust.comment;
    this.statusE=cust.status;

  }
  delete(cust){
  //alert("delete clicked for "+cust.medId)
  const obj={medId:cust.medId};

  this.apiService.deleteWork(obj).subscribe((data: any) => {
    this.editable=false; 
 
  console.log( data);
    if(data){
      console.log( data);

      console.log( data.status);

      if (data.status === true) {
        // alert('successfully inserted');
        this.apiService.getWork(this.mobile).subscribe( data => this.newData = data );
        }
      }

     })

  }
  editSubmit(){

    console.log(this.medopsE)

    const obj1 = {
      _id:this.editId,
      newMed: this.medopsE,
      action: this.actionE,
      status: this.statusE,
      comment: this.commentE
    };
    console.log(obj1._id)

     this.apiService.putWork(obj1).subscribe((data: any) => {
      this.editable=false; 
   
    console.log( data);
      if(data){
        console.log( data);

        console.log( data.status);

        if (data.status === true) {
          // alert('successfully inserted');
          this.apiService.getWork(this.mobile).subscribe( data => this.newData = data );
          }
        }

       })
  }
}