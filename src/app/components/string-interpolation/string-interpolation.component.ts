import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {
  personal = {
    name: 'Abner',
    lastName: 'Oliver',
    age: 15,
    address: 'SP'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
