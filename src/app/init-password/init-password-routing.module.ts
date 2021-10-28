import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitPasswordPage } from './init-password.page';

const routes: Routes = [
  {
    path: '',
    component: InitPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitPasswordPageRoutingModule {}
