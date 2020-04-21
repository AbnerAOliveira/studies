import {Component, OnChanges, OnDestroy, OnInit, SimpleChange} from '@angular/core';
import {Client} from "../../interfaces/client";

@Component({
  selector: 'app-main-life',
  templateUrl: './main-life.component.html',
  styleUrls: ['./main-life.component.css']
})
export class MainLifeComponent implements OnInit {

  private foods: string[] = ['Pizza', 'Rice', 'Beans'];
  private clients: Client[] = [];
  private food: string;
  private name: string;
  private age: number;
  private editClient = null;
  constructor() {
  }

  ngOnInit() {
  }

  save() {
    if (this.editClient == null){
      this.clients.push({
        name: this.name,
        age: this.age,
        food: this.food
      });
      this.name = null;
      this.age = null;
      this.food = null;
    }
  }
}
