import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-ref',
  templateUrl: './ref.component.html',
  styleUrls: ['./ref.component.css']
})
export class RefComponent implements OnInit {

  @Input()tutis: string;
  @Output()ah = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
  }

  teste() {
    console.log('Olá');
  }

  teste1(c: string) {
    console.log(c);
  }

}
