import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSelectSearchModule } from 'mat-select-search';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NewsComponent } from './pages/news/news.component';
import { GetAutoQuoteComponent } from './pages/get-auto-quote/get-auto-quote.component';
import { GetFreightQuoteComponent } from './pages/get-freight-quote/get-freight-quote.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../main/main.module';
import { HttpClient } from '@angular/common/http';
import { SearchPipe } from '../core/pipes/search.pipe';
import { MyAutoQuoteComponent } from './pages/my-auto-quote/my-auto-quote.component';
import { MyFreightQuoteComponent } from './pages/my-freight-quote/my-freight-quote.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { ArchiveComponent } from './pages/archive/archive.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    NewsComponent,
    GetAutoQuoteComponent,
    GetFreightQuoteComponent,
    BlogsComponent,
    MyAutoQuoteComponent,
    MyFreightQuoteComponent,
    InvoiceComponent,
    ArchiveComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SearchPipe,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSelectSearchModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatCheckboxModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ]
})
export class AdminModule { }
