import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Location } from '@angular/common';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
   movies: any;
   searchRes: any;
   searchStr: any;
   theatersList: any;
 constructor(private router: ActivatedRoute, private http: Http, private location: Location, private moviesService: MoviesService) {
      this.movies = [];
      this.moviesService.getInTheaters().then(res => {
        this.theatersList = res.results;
    });
  }
  searchMovies() {
    this.moviesService.searchMovies(this.searchStr).then(res => {
        this.searchRes = res.results;
    });
}
  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['id'];
      this.moviesService.getMovies(id)
      .then((movies: any) => {
        console.log(movies);
        this.movies = movies.results;
    });
   });
  }
}
