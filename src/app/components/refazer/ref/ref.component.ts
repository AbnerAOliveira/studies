import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-ref',
  templateUrl: './ref.component.html',
  styleUrls: ['./ref.component.css']
})
export class RefComponent implements OnInit, OnChanges {

  @Input()tutis: string;
  @Output()ah = new EventEmitter();
  private oldTutis: string = '';
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
  teste3(){
    this.ah.emit('chamb');
  }

  ngOnChanges(changes: {SimpleChange}): void {
    if (changes.hasOwnProperty['tutis']){
      return this.oldTutis = changes['tutis'].previousValue;
    }
  }

}
