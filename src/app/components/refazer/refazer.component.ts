import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {RefComponent} from "./ref/ref.component";

@Component({
  selector: 'app-refazer',
  templateUrl: './refazer.component.html',
  styleUrls: ['./refazer.component.css']
})
export class RefazerComponent implements OnInit {

  private tatis:string = 'Dasmena';
  @ViewChild(RefComponent, {static: false})
  private ref: RefComponent;

  constructor() {
  }

  ngOnInit() {
  }

  crush() {
    this.ref.teste1('Dalee');
  }

}
