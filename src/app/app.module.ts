import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkDataComponent } from './work-data/work-data.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';

import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkDataComponent,
    SidebarComponent,
    HeaderComponent,
    SignupComponent,
    TableComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
