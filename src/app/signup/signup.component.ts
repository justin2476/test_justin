import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SignupService} from '../signup.service';
import {IUser} from '../core/interface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private firstName = '';
  private lastName = '';
  private adminId = '';
  private password = '';
  private mobile: number;
  private repeat = '';
  public obj: IUser;

  constructor(private signupService: SignupService,   private router: Router) { }

  ngOnInit() {
  }
onsubmit() {
  if (this.password == this.repeat) {
    console.log(this.firstName + ',' + this.lastName + ',' + this.adminId + ',' + this.mobile + ',' + this.repeat + ',' + this.password);
    const obj = {firstName: '',
  lastName: '',
  mobile: 0,
  password: '',
  userId: ''
};
    if (obj) {
   obj.firstName = this.firstName;
   obj.lastName = this.lastName;
   obj.mobile = this.mobile;
   obj.password = this.password;
   obj.userId = this.adminId;
   console.log( 'obj found' + obj );

   this.signupService.postUser(obj).subscribe( data =>
    data == 'work posted' ? this.router.navigate(['/table']) : console.log(data));



  } else {
    console.log( 'no obj found' + obj );
  }
} else {
  console.log('password mismatch');
  }
  }
}
