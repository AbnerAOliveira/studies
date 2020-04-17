import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-two-way-data-bindings',
  templateUrl: './two-way-data-bindings.component.html',
  styleUrls: ['./two-way-data-bindings.component.css']
})
export class TwoWayDataBindingsComponent implements OnInit {
  client = {
    firstName: 'Aba',
    lastName: 'Xes',
  }

  constructor() {
  }

  ngOnInit() {
  }

}
