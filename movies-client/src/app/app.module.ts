import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './movies/movies.component';
import { MoviesService } from './movies.service';
import { MovieComponent } from './movie/movie.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateMovieComponent } from './create-movie/create-movie.component';
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    CreateMovieComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule ,
    FormsModule,
    FlashMessagesModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: MoviesComponent},
      {path: 'movie/:id', component: MovieComponent}
    ]),
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
