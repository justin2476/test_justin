import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {IUser} from './core/interface';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  postUserUrl = 'http://localhost:4000/createUser';
  getWorkUrl = 'http://localhost:4000/getWork';
  postWorkUrl = 'http://localhost:4000/postWork';
  loginUrl = 'http://localhost:4000/login';
  constructor(private http: HttpClient) { }


 public postUser(user: IUser)  {
   console.log('from postUser' + user.firstName);
   return this.http.post(this.postUserUrl, user, { responseType: 'text'}).pipe(
      tap(( user: any) => console.log(`added hero w/ id=${user}`)),
      catchError(this.handleError<IUser>('postUser'))
    );
  }
  public login(user: any)  {
    console.log('from postUser' + user.mobile);
    return this.http.post(this.loginUrl, user, { responseType: 'text'}).pipe(
       tap(( user: any) => console.log(`added hero w/ id=${user}`)),
       catchError(this.handleError<IUser>('postUser'))
     );
   }

  public postWork(user: any)  {
    console.log('from postUser' + user.medops);
    return this.http.post(this.postWorkUrl, user, { responseType: 'text'}).pipe(
       tap(( user: any) => console.log(`added hero w/ id=${user}`)),
       catchError(this.handleError<any>('postUser'))
     );
   }
  public getWork( )  {
     return this.http.get(this.getWorkUrl);
   }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  }

