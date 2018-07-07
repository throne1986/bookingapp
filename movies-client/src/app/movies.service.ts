import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = 'http://localhost:8000/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  searchStr: string;
  queryUrl = '/search/';
  theatreUrl = '/theatre/';
  moviesUrl = '/movies/';
  reviewUrl = '/review';
  commentsUrl = '/comment';
  addCommentsUrl = '/comments';
  movieUrl = '/movies';
  constructor(private http: HttpClient) { }
  // function to extract data from rensponse
  private extractData(res: Response) {
    // tslint:disable-next-line:prefer-const
    let body = res;
    return body || {};
  }
  // Return all movies
  getMovies(): Observable<any> {
    return this.http.get(apiUrl + this.moviesUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  // Return single movie by ID.
  getMovie(id: string): Observable<any> {
    const url = `${apiUrl + this.movieUrl}/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  // Return movie  revies by ID.
  getReview(id: string): Observable<any> {
    const url = `${apiUrl + this.reviewUrl}/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  // Return movies in theaters
  getInTheaters(): Observable<any> {
    return this.http.get(apiUrl + this.theatreUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));

  }
  // Return Comments
  getComments(id: string): Observable<any> {
    const url = `${apiUrl + this.commentsUrl}/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  // Return the search movie in front end
  searchMovies(searchStr: string): Observable<any> {
    return this.http.get(apiUrl + this.queryUrl + searchStr, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  // Adds comments
  addReview(date, email, city, hotel): Observable<any> {
    const uri = `${apiUrl + this.addCommentsUrl}`;
    const obj = {
      date: date,
      email: email,
      city: city,
      hotel: hotel

    };
    return this.http.post(uri, obj);
  }
  createMovie(data): Observable<any> {
    return this.http.post(apiUrl, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  // Errors Handler
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
