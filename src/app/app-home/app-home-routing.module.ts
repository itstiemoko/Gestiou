import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppHomePage } from './app-home.page';

const routes: Routes = [
  {
    path: '',
    component: AppHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppHomePageRoutingModule {}
