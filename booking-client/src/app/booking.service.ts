import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = '/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  searchStr: string;
  bookingUrl = '/booking';
  addBookingsUrl = '/bookings';
  constructor(private http: HttpClient) { }
  // function to extract data from rensponse
  private extractData(res: Response) {
    // tslint:disable-next-line:prefer-const
    let body = res;
    return body || {};
  }
  // Return Comments
  getBookings(id: string): Observable<any> {
    const url = `${apiUrl + this.bookingUrl}/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  // Adds comments
  addBooking(date, email, city, hotel): Observable<any> {
    const uri = `${apiUrl + this.addBookingsUrl}`;
    const obj = {
      date: date,
      email: email,
      city: city,
      hotel: hotel

    };
    return this.http.post(uri, obj);
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
