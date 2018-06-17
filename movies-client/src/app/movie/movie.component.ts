import { Component, OnInit} from '@angular/core';
import { MoviesService } from '../movies.service';
import { RouterModule, Routes } from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: object;
  review: {};
  addreview: any;
  addreviews: any[];
  constructor(private router: ActivatedRoute, private moviesService: MoviesService) {
    this.movie = [];
    this.review = [];
    this.addreview = [];
    this.addreviews = [];
  }
  addReview(addreview: any): void {
    if (!addreview) { return; }
    this.moviesService.createReview(addreview)
      .then(reviews => {
       console.log(reviews);
       this.addreviews.push(reviews.addreview);
      });
  }
  ngOnInit() {
        this.router.params.subscribe((params) => {
          // tslint:disable-next-line:prefer-const
          let id = params['id'];
          this.moviesService.getMovie(id)
           .then(movie => {
            this.movie = movie;
          });
        });

        this.router.params.subscribe((params) => {
          // tslint:disable-next-line:prefer-const
          let id = params['id'];
          this.moviesService.getReview(id)
           .then(review => {
             console.log(review);
            this.review = review;
          });
        });
      }
 }

