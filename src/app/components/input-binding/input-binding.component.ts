import {Component, Input, OnInit} from '@angular/core';
import {PeopleModels} from "../../models/people.models";

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {
  @Input() name: string;
  @Input() age: number;
  people: PeopleModels[];

  constructor() {
    this.people = [
      {name: 'Abner', age:23},
      {name: 'Br', age:20},
      ]
  }

  ngOnInit() {
  }

}
