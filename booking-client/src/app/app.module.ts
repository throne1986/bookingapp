import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BookingService } from './Booking.service';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxDatePickerModule } from 'igniteui-angular';
import { AboutComponent } from './about/about.component';
import { IgxCalendarModule, IgxDialogModule } from 'igniteui-angular';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
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
      { path: '', component: AboutComponent },
      { path: 'about', component: AboutComponent }
    ]),
  ],
  providers: [BookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
