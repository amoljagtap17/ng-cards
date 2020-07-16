import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css'],
})
export class PipesDemoComponent {
  name: string;
  date: string;
  amount: number;

  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000,
  };

  // tslint:disable-next-line: typedef
  onNameChange(value: string) {
    this.name = value;
  }

  // tslint:disable-next-line: typedef
  onDateChange(value: string) {
    this.date = value;
  }

  // tslint:disable-next-line: typedef
  onAmountChange(value: string) {
    this.amount = parseFloat(value);
  }
}
