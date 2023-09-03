import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent {
  sidebarToggle: boolean = true;
  elem: any = this.document.documentElement;
  fullScreenMode: boolean = false;

  constructor(@Inject(DOCUMENT) private document: any, private router: Router) { }

  ngOnInit() {
    if (window.innerWidth < 992) {
      this.sidebarToggle = true;
    } else {
      this.sidebarToggle = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowScroll() {
    if (window.innerWidth < 992) {
      this.sidebarToggle = true;
    } else {
      this.sidebarToggle = false;
    }
  }


  openFullscreen() {
    this.fullScreenMode = true;
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
  }

  closeFullscreen() {
    this.fullScreenMode = false;
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/app/home');
  }
}
