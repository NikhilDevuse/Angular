import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-masteringpipes',
  templateUrl: './masteringpipes.component.html',
  styleUrls: ['./masteringpipes.component.css']
})
export class MasteringpipesComponent implements OnInit {
  name: string = '';
  inputDate: string = '';
  amount: number = 0;
  height: number = 0;
  miles: number = 0;

  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000
  }

  constructor() { }

  ngOnInit() { }

  onNameChange(value: string) {
    this.name = value;
  }

  onDateChange(value: string) {
    this.inputDate = value
  }

  onAmountChange(value: string) {
    this.amount = parseFloat(value);
  }

  onHeightChange(value: string) {
    this.height = parseFloat(value);
  }

  onMilesChange(value: string) {
    this.miles = parseFloat(value);
  }
}
