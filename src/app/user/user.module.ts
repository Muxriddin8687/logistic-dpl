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

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SchedulesComponent } from './pages/schedules/schedules.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { GetAutoQuoteComponent } from './pages/get-auto-quote/get-auto-quote.component';
import { GetFreightQuoteComponent } from './pages/get-freight-quote/get-freight-quote.component';
import { MyAutoQuoteComponent } from './pages/my-auto-quote/my-auto-quote.component';
import { MyFreightQuoteComponent } from './pages/my-freight-quote/my-freight-quote.component';
import { SearchPipe } from '../core/pipes/search.pipe';
import { ProfileComponent } from './pages/profile/profile.component';


@NgModule({
  declarations: [
    UserComponent,
    SidebarComponent,
    DashboardComponent,
    SchedulesComponent,
    InvoiceComponent,
    GetAutoQuoteComponent,
    GetFreightQuoteComponent,
    MyAutoQuoteComponent,
    MyFreightQuoteComponent,
    ProfileComponent,
  ],
  imports: [
    UserRoutingModule,
    CommonModule,
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
export class UserModule { }


// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
