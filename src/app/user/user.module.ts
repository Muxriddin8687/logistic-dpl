import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SchedulesComponent } from './pages/schedules/schedules.component';
import { AcceptedOrderComponent } from './pages/accepted-order/accepted-order.component';
import { MyOrderComponent } from './pages/my-order/my-order.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';


@NgModule({
  declarations: [
    UserComponent,
    SidebarComponent,
    DashboardComponent,
    SchedulesComponent,
    AcceptedOrderComponent,
    MyOrderComponent,
    InvoiceComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
