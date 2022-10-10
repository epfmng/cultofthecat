import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {timeout} from 'rxjs/operators';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.url;
  }

  checkEmailUser(email: string): Observable<User> {
    return this.http.get<User>(`${this.url}/users/${email}`).pipe(timeout(10000));
  }
}
