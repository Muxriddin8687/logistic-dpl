import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class MainComponent {

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.use('en');
  }
}
