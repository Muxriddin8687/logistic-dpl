import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-enclosed-car',
  templateUrl: './enclosed-car.component.html',
  styleUrls: ['./enclosed-car.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class EnclosedCarComponent {

}
