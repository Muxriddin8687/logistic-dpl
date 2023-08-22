import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NewsComponent } from './pages/news/news.component';
import { GetAutoQuoteComponent } from './pages/get-auto-quote/get-auto-quote.component';
import { GetFreightQuoteComponent } from './pages/get-freight-quote/get-freight-quote.component';
import { AdminComponent } from './admin.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { MyAutoQuoteComponent } from './pages/my-auto-quote/my-auto-quote.component';
import { MyFreightQuoteComponent } from './pages/my-freight-quote/my-freight-quote.component';
import { AcceptedOrderComponent } from './pages/accepted-order/accepted-order.component';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'news', component: NewsComponent },
      { path: 'blogs', component: BlogsComponent },
      { path: 'get-auto-quote', component: GetAutoQuoteComponent },
      { path: 'get-freight-quote', component: GetFreightQuoteComponent },
      { path: 'my-auto-quote', component: MyAutoQuoteComponent },
      { path: 'my-freight-quote', component: MyFreightQuoteComponent },
      { path: 'accepted', component: AcceptedOrderComponent },
      { path: 'orders', component: MyOrdersComponent },

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
