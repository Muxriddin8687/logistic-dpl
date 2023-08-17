import { Component, ElementRef, ViewChild, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-recyclers',
  templateUrl: './recyclers.component.html',
  styleUrls: ['./recyclers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class RecyclersComponent {
  @ViewChild('videoRef', { static: true }) videoRef!: ElementRef;

  ngAfterViewInit(): void {
    const media = this.videoRef.nativeElement;
    media.muted = true;
    media.play();
    setInterval(() => {
      media.play()
    }, 2000);
  }
}
