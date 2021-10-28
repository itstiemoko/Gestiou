import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppHomePageRoutingModule } from './app-home-routing.module';

import { AppHomePage } from './app-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppHomePageRoutingModule
  ],
  declarations: [AppHomePage]
})
export class AppHomePageModule {}
