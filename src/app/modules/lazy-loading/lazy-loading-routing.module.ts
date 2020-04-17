import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TesteLazyComponent} from "../../components/teste-lazy/teste-lazy.component";


const routes: Routes = [
  {path: 'teste', component: TesteLazyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadingRoutingModule {
}
