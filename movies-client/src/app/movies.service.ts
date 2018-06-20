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
  movieUrl = '/movies/';
  reviewUrl = '/comments/';
  // private apiUrl = '/movies';
  constructor(private http: Http, private _jsonp: Jsonp) { }
  getMovies(id: string): Promise<any> {
    return this.http.get('movies/movies')
      .toPromise()
      .then(this.handleData)
      .catch(this.handleError);
  }
  getMovie(id: string): Promise<any> {
    return this.http.get('movies/movies' + id)
      .toPromise()
      .then(this.handleData)
      .catch(this.handleError);
  }
  addReview(author, description) {
    const uri = 'movies/comments';
    const obj = {
      author: author,
      description: description
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
          console.log('Done'));
  }
  getReview(id: string): Promise<any> {
    return this.http.get('movies/movies' + id)
      .toPromise()
      .then(this.handleData)
      .catch(this.handleError);
  }
  searchMovies(searchStr: string): Promise<any> {
    return this.http.get('movies/search' + this.queryUrl + searchStr)
      .toPromise()
      .then(this.handleData)
      .catch(this.handleError);
  }
  getInTheaters(): Promise<any> {
    return this.http.get('movies/theatre')
      .toPromise()
      .then(this.handleData)
      .catch(this.handleError);
  }
  createMovie(movie: string): Promise<any> {
    return this.http.post('movies/movies', movie)
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
