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
  private editClient: number = -1;

  constructor() {
  }

  ngOnInit() {
  }

  save() {
    if (this.editClient == -1) {
      this.clients.push({
        name: this.name,
        age: this.age,
        food: this.food
      });
      this.name = null;
      this.age = null;
      this.food = null;
    } else {
      this.clients[this.editClient].age = this.age;
      this.clients[this.editClient].name = this.name;
      this.clients[this.editClient].food = this.food;
      this.editClient = -1;
    }
  }

  edit(i: number) {
    this.age = this.clients[i].age;
    this.name = this.clients[i].name;
    this.food = this.clients[i].food;
    this.editClient = i;
  }

  delete(i: number) {
    this.clients.splice(i, 1)
  }
}
