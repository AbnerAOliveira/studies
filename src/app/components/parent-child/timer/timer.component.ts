import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  seconds: number = 0;
  miliseconds: number = 0;
  interval: any;
  running: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  start(){
    if (!this.running){
      this.interval = setInterval(() => this.seconds += 1, 1000);
      this.interval = setInterval(() => this.miliseconds += 50, 50);
    }
    this.running = true;
  }

  stop(){
    if (this.running){
      clearInterval(this.interval);
      this.running = false;
    }
  }

  zero(){
    this.seconds = 0;
  }

}
