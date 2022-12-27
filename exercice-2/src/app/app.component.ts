import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'exercice-2';
  num1 = 0;
  num2 = 0;
  operation = "Addition";
  result = 0;
  history = [{ time: new Date(), operation: "add", result: 0 }] ;

  ngOnInit() {
    this.history = [];
  }

  calculate() {
    switch (this.operation) {
      case 'Addition':
        this.result = this.num1 + this.num2;
        break;
      case 'Soustraction':
        this.result = this.num1 - this.num2;
        break;
      case 'Multiplication':
        this.result = this.num1 * this.num2;
        break;
      case 'Division':
        this.result = this.num1 / this.num2;
        break;
      default:
        this.result = 0;
    }

    this.history.unshift({
      time: new Date(),
      operation: this.operation,
      result: this.result
    });
  }

  removeFromHistory(entry: any) {
    const index = this.history.indexOf(entry);
    if (index > -1) {
      this.history.splice(index, 1);
    }
  }
}
