import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
mobile: string;
password: string;
  constructor(private apiService: SignupService,   private router: Router) { }

  ngOnInit() {
  }

  onsubmit() {
    const obj = {mobile: this.mobile,
      password: this.password
    };
    this.apiService.login(obj).subscribe(data => {
if (data === 'access granted') {
this.router.navigate(['/table']);
} else {
  console.log(data);
}

});
    alert(obj.mobile);
  }

}
