import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Comments } from '../../../../app/models/comments';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: object;
  review: {};
  comments: {};
  addcomments: Comment[];
  addreview: {};
  addreviews: any[];
  angForm: FormGroup;
  // tslint:disable-next-line:max-line-length
  constructor(
    private flashMessages: FlashMessagesService,
    private fb: FormBuilder,
    private route: Router,
    private http: HttpClient,
    private activeRouter: ActivatedRoute,
    private moviesService: MoviesService) {
    this.movie = [];
    this.review = [];
    this.comments = [];
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
    this.moviesService.addReview(author, description).subscribe(success => {
        this.flashMessages.show('You are data we succesfully submitted', { cssClass: 'alert-success', timeout: 3000 });
        // get the id
        this.activeRouter.params.subscribe((params) => {
          // tslint:disable-next-line:prefer-const
          let id = params['id'];
          this.moviesService.getComments(id)
            .subscribe(comments => {
              console.log(comments);
              this.comments = comments;
            });
        });
    }, error => {
        this.flashMessages.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
    });
}
  ngOnInit() {
    this.activeRouter.params.subscribe((params) => {
      // tslint:disable-next-line:prefer-const
      let id = params['id'];
      this.moviesService.getMovie(id)
        .subscribe(movie => {
          this.movie = movie;
        });
    });
    this.activeRouter.params.subscribe((params) => {
      // tslint:disable-next-line:prefer-const
      let id = params['id'];
      this.moviesService.getReview(id)
        .subscribe(review => {
          console.log(review);
          this.review = review;
        });
    });
    this.activeRouter.params.subscribe((params) => {
      // tslint:disable-next-line:prefer-const
      let id = params['id'];
      this.moviesService.getComments(id)
        .subscribe(comments => {
          console.log(comments);
          this.comments = comments;
        });
    });

  }
}

