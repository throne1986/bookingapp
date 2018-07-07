import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './movies/movies.component';
import { MoviesService } from './movies.service';
import { MovieComponent } from './movie/movie.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxDatePickerModule } from 'igniteui-angular';
import { AboutComponent } from './about/about.component';
import { IgxCalendarModule, IgxDialogModule } from 'igniteui-angular';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CalendarModule} from 'primeng/calendar';
import { CalendarComponent } from './calendar/calendar.component';
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    CreateMovieComponent,
    AboutComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    JsonpModule,
    CalendarModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    FormsModule,
    IgxCalendarModule,
    IgxDatePickerModule,
    IgxDialogModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: MoviesComponent },
      { path: 'about', component: AboutComponent },
      { path: 'movie/:id', component: MovieComponent }
    ]),
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
