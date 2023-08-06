import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserGuard } from './core/guards/user.guard';
import { AdminGuard } from './core/guards/admin.guard';
import { LoaderSpinnerComponent } from './main/components/loader-spinner/loader-spinner.component';

@NgModule({ 
  declarations: [
    AppComponent,
    LoaderSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [UserGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }