import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NDZmonitor';
  private signInOut = 'Sign In';
  private sign: boolean;
  ngOnInit(): void {
    if (sessionStorage.getItem('login') !== 'true') {
       sessionStorage.setItem('login', 'false');
       this.signInOut = 'Sign In';
       this.sign = false;
    } else {
      this.signInOut = 'Sign Out';
      this.sign = true;
    }
  }
  onClick() {
    if (sessionStorage.getItem('login') === 'true') {
      this.signInOut = 'Sign Out';
   } else {
     this.signInOut = 'Sign In';
   }
    console.log('clicked signIn');
  }
  onClickSignOut() {
    sessionStorage.setItem('login', 'false');

    this.signInOut = 'Sign In';
    console.log('clicked signOut');

  }


}
