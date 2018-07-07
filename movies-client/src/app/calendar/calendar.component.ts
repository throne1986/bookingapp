import { Component, OnInit, forwardRef, Input, ElementRef, ViewChild } from '@angular/core';
import { IgxCalendarComponent, IgxDialogComponent } from 'igniteui-angular';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CalendarComponent), multi: true }
  ]
})
export class CalendarComponent implements ControlValueAccessor, OnInit {
  @ViewChild('calendar') public calendar: IgxCalendarComponent;
  @ViewChild('alert') public dialog: IgxDialogComponent;
  @Input()
  label: string;
  @Input()
  isConsultation: boolean;

  private _theDate: string;

  constructor() { }

  propagateChange = (_: any) => { };
  onTouched: any = () => { };

  writeValue(obj: any): void {
    console.log('writeValue => obj : ', obj);
    if (obj) {
      this._theDate = obj;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
    console.log('registerOnChange => fn : ', fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
    console.log('registerOnTouched => fn : ', fn);
  }

  get theDate() {
    console.log('get theDate()');
    return this._theDate;
  }

  set theDate(val) {
    console.log('set theDate(val) - val => ', val);
    this._theDate = val;
    this.propagateChange(val);
  }
  public verifyRange(dates: Date[]) {
    if (dates.length > 5) {
      this.calendar.selectDate(dates[0]);
      this.dialog.open();
    }
  }
  ngOnInit() {

  }
}
