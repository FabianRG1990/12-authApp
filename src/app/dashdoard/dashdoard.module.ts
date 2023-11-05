import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashdoardRoutingModule } from './dashdoard-routing.module';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';


@NgModule({
  declarations: [
    DashboardLayoutComponent
  ],
  imports: [
    CommonModule,
    DashdoardRoutingModule
  ]
})
export class DashdoardModule { }
