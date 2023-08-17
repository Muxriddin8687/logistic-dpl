import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {

  constructor(private translate: TranslateService) { }


  selectLanguage(lang: string) {
    this.translate.use(lang);
  }
}
