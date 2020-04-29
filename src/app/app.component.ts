import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private products = [];
  title = 'data-binding';
  age = 23;
  private value: string = '';

  constructor() {
    this.products = [
      {name: 'A', price: 3.75},
      {name: 'B', price: 3.10}
    ]
  }

  teste(event: any) {
    this.value += event.target.value + ' | ';
  }
}
