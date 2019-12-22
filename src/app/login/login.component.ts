import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
mobile: string;
password: string;
login=true;
  constructor(private apiService: SignupService,   private router: Router, private app: AppComponent) { }

  ngOnInit() {

    console.log('from login login falg' + sessionStorage.getItem('login'));
    sessionStorage.setItem('login', 'false');

  }

  onsubmit() {
    const obj = {mobile: this.mobile,
      password: this.password
    };
    this.apiService.login(obj).subscribe(data => {
if (data === 'access granted') {
  sessionStorage.setItem('login', 'true');
  sessionStorage.setItem('mobile', this.mobile);

  this.router.navigate(['/table']);
  this.app.onClick();

} else {
  console.log(data);
  sessionStorage.setItem('login', 'false');
  alert("Wrong credentials")
  this.login=false;

}

});
    console.log('Entered Mobile Number is' + obj.mobile);
  }

}
