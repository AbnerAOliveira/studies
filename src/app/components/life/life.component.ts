import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {LifeCycle} from "../../interfaces/life-cycle";

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit, OnChanges, OnDestroy {
  @Input() name: string;
  @Input() age: number;
  @Input() food: string;

  public events: LifeCycle[] = [];
  id: number = 0;
  colors: string[] = ['warn', 'accent', 'primary'];

  constructor() {
    console.log(this.name + 'Construct');
    this.newEvent('constructor')
  }

  ngOnInit() {
    console.log(this.name + 'Init');
    this.newEvent('init')
  }

  ngOnChanges(changes: { SimpleChange }) {
    for(let c in changes){
      console.log(changes[c].currentValue);
    }
    console.log(changes['name'].previousValue);
    console.log(this.name + 'Change');
    this.newEvent('changes')
  }

  ngAfterContentInit() {
    console.log(this.name + 'Conten init');
    this.newEvent('content init')
  }

  ngAfterViewInit() {
    console.log(this.name + 'View init');
    this.newEvent('view init')
  }

  ngOnDestroy(): void {
    console.log(this.name + 'Destroy');
    this.newEvent('destroy')
  }

  newEvent(name: string) {
    let i = this.id++;
    this.events.push({
      name: name,
      id: i,
      color: this.colors[i % this.colors.length]
    });
    setTimeout(() => {
      let idx = this.events.findIndex((e) => e.id == i);
      if (idx >= 0) {
        this.events.splice(idx, 1)
      }
    }, 2000 + this.events.length * 2000);
  }

}
