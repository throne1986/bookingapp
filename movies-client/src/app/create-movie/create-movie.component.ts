import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Location } from '@angular/common';
import { MoviesService } from '../movies.service';
@Component({
    selector: 'app-create-movie',
    templateUrl: './create-movie.component.html',
    styleUrls: ['./create-movie.component.scss']
})
export class CreateMovieComponent {
    movie: any;
    addmovie: any;
    newMovie: any[];
    constructor(private http: Http, private location: Location, private moviesService: MoviesService) {
        this.addmovie = [];
        this.newMovie = [];
    }
    addMovie(addmovie: any): void {
        if (!addmovie) { return; }
        this.moviesService.createMovie(addmovie)
          .subscribe(movie => {
           console.log(movie);
           this.newMovie.push(movie.addmovie);
          });
      }
}
