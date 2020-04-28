import { Component, OnInit } from '@angular/core';
import {Observable, Observer} from "rxjs";

@Component({
  selector: 'app-basic-obs',
  templateUrl: './basic-obs.component.html',
  styleUrls: ['./basic-obs.component.css']
})
export class BasicObsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const myObs = new Observable((obs: Observer<number>) => {
      obs.next(1);
      obs.next(2);
      obs.next(3);
      obs.complete();
    });

    myObs.subscribe((n:number) => {
      console.log(n);
    }, error => console.log(error), () => console.log('Completed'))
  }

}
