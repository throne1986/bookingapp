import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: object;
  review: {};
  addreview: {};
  addreviews: any[];
  angForm: FormGroup;
  // tslint:disable-next-line:max-line-length
  constructor(private fb: FormBuilder, private route: Router, private http: HttpClient, private activeRouter: ActivatedRoute, private moviesService: MoviesService) {
    this.movie = [];
    this.review = [];
    this.addreviews = [];
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      author: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  addReview(author, description) {
    this.moviesService.addReview(author, description);
  }
  ngOnInit() {
    this.activeRouter.params.subscribe((params) => {
      // tslint:disable-next-line:prefer-const
      let id = params['id'];
      this.moviesService.getMovie(id)
        .then(movie => {
          this.movie = movie;
        });
    });

    this.activeRouter.params.subscribe((params) => {
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

