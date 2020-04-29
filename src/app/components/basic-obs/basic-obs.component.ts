import {Component, Input, OnInit} from '@angular/core';
import {interval, Observable, Observer} from "rxjs";

@Component({
  selector: 'app-basic-obs',
  templateUrl: './basic-obs.component.html',
  styleUrls: ['./basic-obs.component.css']
})
export class BasicObsComponent implements OnInit {

  @Input('tName') name: string;
  @Input('tPrice') price: number;

  constructor() {
  }

  ngOnInit() {
    const myObs = new Observable((obs: Observer<number>) => {
      obs.next(1);
      obs.next(2);
      obs.next(3);
      obs.error(4);
      obs.complete();
    });

    myObs.subscribe((n: number) => {
      console.log(n);
    }, error => console.error(error), () => console.log('Completed'));

    const timer = interval(1000);
    timer.subscribe(
      (n) => console.log(n)
    );
    console.log("after interval");
  }
}
