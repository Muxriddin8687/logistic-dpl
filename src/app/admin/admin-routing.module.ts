import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './pages/news/news.component';
import { GetAutoQuoteComponent } from './pages/get-auto-quote/get-auto-quote.component';
import { GetFreightQuoteComponent } from './pages/get-freight-quote/get-freight-quote.component';
import { AdminComponent } from './admin.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { MyAutoQuoteComponent } from './pages/my-auto-quote/my-auto-quote.component';
import { MyFreightQuoteComponent } from './pages/my-freight-quote/my-freight-quote.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { ArchiveComponent } from './pages/archive/archive.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: 'news', component: NewsComponent },
      { path: 'blogs', component: BlogsComponent },
      { path: 'get-auto-quote', component: GetAutoQuoteComponent },
      { path: 'get-freight-quote', component: GetFreightQuoteComponent },
      { path: 'my-auto-order', component: MyAutoQuoteComponent },
      { path: 'my-freight-order', component: MyFreightQuoteComponent },
      { path: 'invoice', component: InvoiceComponent },
      { path: 'archive', component: ArchiveComponent },

      { path: '', redirectTo: 'get-auto-quote', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
