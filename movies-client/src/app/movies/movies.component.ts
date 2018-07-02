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
  constructor(private moviesService: MoviesService) {
    this.movies = [];
    this.moviesService.getInTheaters().subscribe(res => {
      this.theatersList = res.results;
    });
  }
  searchMovies() {
    this.moviesService.searchMovies(this.searchStr).subscribe(res => {
      this.searchRes = res.results;
    });
  }
  ngOnInit() {
    this.moviesService.getMovies()
      .subscribe(res => {
        console.log(res);
        this.movies = res.results;
      }, err => {
        console.log(err);
      });
  }
}
