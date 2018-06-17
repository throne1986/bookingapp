import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Location } from '@angular/common';
@Component({
    selector: 'app-create-movie',
    templateUrl: './create-movie.component.html',
    styleUrls: ['./create-movie.component.scss']
})
export class CreateMovieComponent {
    movie: any;
    constructor(private http: Http, private location: Location) {
        this.movie = {
            'title': ''
        };
    }
    save() {
        if (this.movie.title) {
            const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
            const options = new RequestOptions({ 'headers': headers });
            this.http.post('http://localhost:8000/movies', JSON.stringify(this.movie), options)
                .subscribe(result => {
                    //  this.location.back();
                });

        }
    }
}
