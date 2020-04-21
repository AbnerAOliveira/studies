import {Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {RefComponent} from "./ref/ref.component";

@Component({
  selector: 'app-refazer',
  templateUrl: './refazer.component.html',
  styleUrls: ['./refazer.component.css']
})
export class RefazerComponent implements OnInit {

  private tatis: string = 'Dasmena';
  private lala:string = '';
  @ViewChild(RefComponent, {static: false})
  private ref: RefComponent;

  constructor() {
  }

  ngOnInit() {

  }

  crush(dale) {
    this.ref.teste1(dale);
  }
  upTatis(){
    return this.tatis = this.lala
  }

}
