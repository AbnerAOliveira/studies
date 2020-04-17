import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NgTemplateComponent} from "./components/ng-template/ng-template.component";


const routes: Routes = [
  {
    path: '', component: NgTemplateComponent
  },
  // {
  //   path: 'lazy', loadChildren: () => import('./modules/lazy-loading/lazy-loading.module').then(
  //     m => m.LazyLoadingModule
  //   )
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
