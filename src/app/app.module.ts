import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StringInterpolationComponent} from './components/string-interpolation/string-interpolation.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";
import { TwoWayDataBindingsComponent } from './components/two-way-data-bindings/two-way-data-bindings.component';
import {FormsModule} from "@angular/forms";
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import {MatRadioModule} from "@angular/material/radio";
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { InputBindingComponent } from './components/input-binding/input-binding.component';
import { PeopleComponent } from './components/people/people.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import {MatListModule} from "@angular/material/list";
import { NgForFormComponent } from './components/ng-for-form/ng-for-form.component';
import {MatIconModule} from "@angular/material/icon";
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { NgTemplateComponent } from './components/ng-template/ng-template.component';
import { LazyLoadingModule } from './modules/lazy-loading/lazy-loading.module';
import {AppRoutingModule} from "./app-routing.module";
import { ParentChildComponent } from './components/parent-child/parent-child.component';
import { TimerComponent } from './components/parent-child/timer/timer.component';
import { OnChangesComponent } from './components/on-changes/on-changes.component';

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayDataBindingsComponent,
    NgStyleComponent,
    NgClassComponent,
    NgIfComponent,
    InputBindingComponent,
    PeopleComponent,
    NgForComponent,
    NgForFormComponent,
    NgSwitchComponent,
    NgTemplateComponent,
    ParentChildComponent,
    TimerComponent,
    OnChangesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatSelectModule,
    FormsModule,
    MatRadioModule,
    MatListModule,
    MatIconModule,
    MatProgressBarModule,
    LazyLoadingModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
