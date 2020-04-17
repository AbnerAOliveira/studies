import {Component, Input, OnChanges, OnInit, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit, OnChanges {

  @Input() name: string;
  beforeName: string;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}): void {
    if (changes.hasOwnProperty('name')){
      this.beforeName = changes['name'].previousValue;
    }
  }
}
