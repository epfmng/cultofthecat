import { Injectable } from '@angular/core';
import {Review} from '../models/review.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {timeout} from 'rxjs/operators';
import { defaultsDeep } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.url;
  }

  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.url}/reviews`).pipe(timeout(10000));
  }
  getReviewsByUserId(id: number):Observable<Review[]> {
    return this.http.get<Review[]>(`${this.url}/reviews/${id}`).pipe(timeout(10000));
  }

  addReview(review: Review): Observable<Review> {
    return this.http.post<any>(`${this.url}/reviews`, review).pipe(timeout(10000));
  }

  deleteReview(id: number): Observable<any> {
    return this.http.delete(`${this.url}/reviews/${id}`).pipe(timeout(10000));
  }

}
