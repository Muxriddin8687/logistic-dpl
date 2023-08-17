import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-recyclers',
  templateUrl: './recyclers.component.html',
  styleUrls: ['./recyclers.component.scss']
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
