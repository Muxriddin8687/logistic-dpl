import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GetAutoQuoteComponent } from './pages/get-auto-quote/get-auto-quote.component';
import { GetFreightQuoteComponent } from './pages/get-freight-quote/get-freight-quote.component';
import { SchedulesComponent } from './pages/schedules/schedules.component';
import { MyAutoQuoteComponent } from './pages/my-auto-quote/my-auto-quote.component';
import { MyFreightQuoteComponent } from './pages/my-freight-quote/my-freight-quote.component';
import { AcceptedOrderComponent } from './pages/accepted-order/accepted-order.component';
import { MyOrderComponent } from './pages/my-order/my-order.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';

const routes: Routes = [
  {
    path: '', component: UserComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'blogs', component: SchedulesComponent },
      { path: 'get-auto-quote', component: GetAutoQuoteComponent },
      { path: 'get-freight-quote', component: GetFreightQuoteComponent },
      { path: 'my-auto-quote', component: MyAutoQuoteComponent },
      { path: 'my-freight-quote', component: MyFreightQuoteComponent },
      { path: 'accepted', component: AcceptedOrderComponent },
      { path: 'orders', component: MyOrderComponent },
      { path: 'invoice', component: InvoiceComponent },

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
