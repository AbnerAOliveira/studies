import {Component, Input} from '@angular/core';
import {PeopleModels} from "./models/people.models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';
  age = 23;
}
