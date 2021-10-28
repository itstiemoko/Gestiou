import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InitPasswordPageRoutingModule } from './init-password-routing.module';

import { InitPasswordPage } from './init-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InitPasswordPageRoutingModule
  ],
  declarations: [InitPasswordPage]
})
export class InitPasswordPageModule {}
