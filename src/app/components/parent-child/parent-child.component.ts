import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TimerComponent} from "./timer/timer.component";

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {

  // @ViewChild(TimerComponent, {static:false})
  @ViewChild('stopwatch2', {static:false})
  @ViewChild('myP', {static:false})
  private myP : ElementRef;

  private timerComponent : TimerComponent;
  constructor() { }

  ngOnInit() {
  }

  start(){
    this.timerComponent.start();
  }
  ngAfterViewInit(){
    console.log(this.myP);
  }

}
