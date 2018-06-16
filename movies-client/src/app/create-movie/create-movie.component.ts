import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Location } from '@angular/common';
@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.scss']
})
export class CreateMovieComponent  {
  movie: any;

  public constructor(private http: Http, private location: Location) {
      this.movie = {
          'tittle': '',
          'genre': '',
          'formats': {
              'digital': false,
              'bluray': false,
              'dvd': false
          }
      };
  }

  public save() {
      if (this.movie.tittle && this.movie.genre) {
          const headers = new Headers({ 'Content-Type': 'application/json' });
          const options = new RequestOptions({ 'headers': headers });
          this.http.post('http://localhost:8000/movies', JSON.stringify(this.movie), options)
              .subscribe(result => {
                  this.location.back();
              });
      }
  }

}
