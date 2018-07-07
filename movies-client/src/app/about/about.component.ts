import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  value: Date;
  minimumDate = new Date();
  comments: {};
  addcomments: Comment[];
  angForm: FormGroup;
  // tslint:disable-next-line:max-line-length
  validEmail = false;

  cities = [
    {
      cityName: 'Berlin',
    },
    {
      cityName: 'Oslo',

    },
    {
      cityName: 'Warsaw',

    },
    {
      cityName: 'Paris',

    }

  ];

  hotels: Array<any> = [
    {
      cityName: 'Oslo',
      hotelName: 'Sheraton Hotel',

    },
    {
      cityName: 'Berlin',
      hotelName: 'grand hotel',

    },
    {
      cityName: 'Warsaw',
      hotelName: 'Hiltom hotel',

    },
    {
      cityName: 'Paris',
      hotelName: 'Africanskiej hotel',

    },
  ];
  public date: Date = new Date(Date.now());
  constructor(private flashMessages: FlashMessagesService,
    private fb: FormBuilder,
    private activeRouter: ActivatedRoute,
    private moviesService: MoviesService) {
    this.comments = [];
    this.createForm();
  }
  onChange(newValue) {
    // tslint:disable-next-line:max-line-length
    const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (validEmail.test(newValue)) {
      this.validEmail = true;
    } else {
      this.validEmail = false;
    }

  }

  createForm() {
    this.angForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      date: new FormControl(''), // this line missing in your code
      city: this.cities[0].cityName,
      hotel: null
    });
  }
  changeSelect(event) {
    const ret = this.hotels.find(data => data.cityName.toString() === event.split(': ')[1].toString());
    this.angForm.get('hotel').setValue(ret.hotelName);
  }


  addReview(date, email, cityName, hotelName) {
    this.moviesService.addReview(date, email, cityName, hotelName).subscribe(() => {
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
    }, () => {
        this.flashMessages.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
      });
  }
  ngOnInit() {

  }

}
