import {Component, OnInit} from '@angular/core';
import {ClientsModels} from "../../models/clients.models";

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.css']
})
export class NgForFormComponent implements OnInit {
  client: ClientsModels;
  name: string = '';
  age: number = 0;
  state: string = '';
  address: string;
  phone: number;
  states = [
    {name: 'São Paulo', sigla: 'SP'},
    {name: 'Rio de Janeiro', sigla: 'RJ'},
    {name: 'Rio Grande do Sul', sigla: 'RS'},
    {name: 'Amazonas', sigla: 'AM'},
  ];

  clients = [];


  constructor() {
    // this.client.name = '';
    // this.client.address = '';
    // this.client.phone = 0;
    // this.client.state = '';
    // this.client.age = 0;
  }

  ngOnInit() {

  }

  save() {
    this.clients.push({
      // name: this.client.name,
      // age: this.client.age,
      // state: this.client.state,
      // address: this.client.address,
      // phone: this.client.phone,
      name: this.name,
      age: this.age,
      state: this.state,
      address: this.address,
      phone: this.phone,
    });
    this.cancel();
    console.log(this.clients)
  }

  cancel() {
    // this.client.name = '';
    // this.client.age = 0;
    // this.client.state = '';
    // this.client.address = '';
    // this.client.phone = 0;

    this.name = '';
    this.age = 0;
    this.state = '';
    this.address = '';
    this.phone = 0;
  }

  deleteClients(i) {
    this.clients.splice(i, 1)
  }


}
