import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { SpinnerService } from './core/services/spinner.service';
import { filter } from 'rxjs';
import { GoogleAnalyticsService } from './core/services/google-analistic.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DPL';

  constructor(private router: Router,
    private _googleAnalytics: GoogleAnalyticsService,
    private spinnerService: SpinnerService) {


    if (environment.prod) {
      this.router.events.subscribe(this.handleGoogleAnalytics);
    }
  }


  handleGoogleAnalytics = (event: any): void => {
    if (event instanceof NavigationEnd) {
      this._googleAnalytics.sendPageView(event.urlAfterRedirects);
    }
  };

  ngOnInit() {
    this.router
      .events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event: any) => {
        this.spinnerService.loading();
      });
  }
}
