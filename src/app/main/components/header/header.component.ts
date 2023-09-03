import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {

  constructor(private translate: TranslateService) { }

  selectLanguage(lang: string) {
    this.translate.use(lang);
  }
}
