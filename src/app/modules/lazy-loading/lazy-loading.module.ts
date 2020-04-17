import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';
import {TesteLazyComponent} from "../../components/teste-lazy/teste-lazy.component";


@NgModule({
  declarations: [
    TesteLazyComponent
  ],
  imports: [
    CommonModule,
    LazyLoadingRoutingModule
  ]
})
export class LazyLoadingModule { }
