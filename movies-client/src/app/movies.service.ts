import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Jsonp } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  searchStr: string;
  queryUrl = '/search/';
  theatreUrl = '/theatre/';
  moveUrl = '/movies/';
  private apiUrl = 'http://localhost:8000';
  constructor(private http: Http, private _jsonp: Jsonp) { }
  getMovies(id: string): Promise<any> {
    return this.http.get(this.apiUrl + '/movies')
      .toPromise()
      .then(this.handleData)
      .catch(this.handleError);
  }

    getMovie(id: string): Promise<any> {
    return this.http.get(this.apiUrl + this.moveUrl + id)
      .toPromise()
      .then(this.handleData)
      .catch(this.handleError);
  }
  searchMovies(searchStr: string): Promise<any> {
    return this.http.get(this.apiUrl + this.queryUrl + searchStr)
      .toPromise()
      .then(this.handleData)
      .catch(this.handleError);
  }
  getInTheaters(): Promise<any> {
    return this.http.get(this.apiUrl + this.theatreUrl)
      .toPromise()
      .then(this.handleData)
      .catch(this.handleError);
  }

  private handleData(res: any) {
    const body = res.json();
    console.log(body); // for development purposes only
    return body.result || body || {};
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for development purposes only
    return Promise.reject(error.message || error);
  }
}
