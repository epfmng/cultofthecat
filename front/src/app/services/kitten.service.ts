import { Injectable } from '@angular/core';
import {Kitten} from '../models/kitten.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {timeout} from 'rxjs/operators';
import { defaultsDeep } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class KittenService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.url;
  }

  getKittens(): Observable<Kitten[]> {
    return this.http.get<Kitten[]>(`${this.url}/kittens`).pipe(timeout(10000));
  }
  getKitten(id: number): Observable<Kitten> {
    return this.http.get<Kitten>(`${this.url}/kittens/${id}`).pipe(timeout(10000));
  }

  addKitten(user: Kitten): Observable<Kitten> {
    return this.http.post<any>(`${this.url}/kittens`, user).pipe(timeout(10000));
  }

  deleteKitten(id: number): Observable<any> {
    return this.http.delete(`${this.url}/kittens/${id}`).pipe(timeout(10000));
  }

}
