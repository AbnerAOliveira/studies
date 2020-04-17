import {Component, Input, OnInit} from '@angular/core';
import {PeopleModels} from "../../models/people.models";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  @Input() people: PeopleModels;

  constructor() {
  }

  ngOnInit() {
  }

}
