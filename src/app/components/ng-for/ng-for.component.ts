import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  names = [
    'Abner',
    'Bruno',
    'Bea',
    'Neck',
  ];
  states = [
    {name: 'São Paulo', sigla: 'SP'},
    {name: 'Rio de Janeiro', state: 'RJ'},
    {name: 'Rio Grande do Sul', state: 'RS'},
    {name: 'Amazonas', state: 'AM'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
