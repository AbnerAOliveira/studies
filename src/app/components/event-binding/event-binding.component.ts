import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  nameButton = 'Button';
  count = 0;

  btnEnable = true;
  spinnerButton = "determinate";
  valueSpinner = 50;
  enableCB = false;
  optionSelectedBool = false;
  optionSelected: any;

  constructor() {
  }

  ngOnInit() {

  }

  countClickButton() {
    this.count++;
    this.valueSpinner = 50 + this.count;
    this.nameButton = `It button was clicked ${this.count} times`
  }

  zeroCountButton() {
    this.count = 0;
    this.valueSpinner = 50;
    this.nameButton = 'Button';
  }

  loadDisable() {
    this.btnEnable = false;
    this.spinnerButton = "indeterminate";
    setTimeout(() => {
      this.btnEnable = true;
      this.spinnerButton = "determinate";
    }, 3000);
  }

  changeState(event) {
    console.log(event);
    this.enableCB = event.checked
  }
  selectOption(event){
    console.log(event);
    this.optionSelectedBool = true;
     this.optionSelected = `Selected option ${event}`
  }

}
