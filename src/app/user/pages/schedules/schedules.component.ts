import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent {
  http = inject(HttpClient);

  api = environment.api + 'blogs/';
  imgUrl = environment.api + 'assets/images/blogs/';
  blogsList: any = signal([]);


  load() {
    this.http
      .get(this.api + 'getAll.php')
      .subscribe((res: any) => this.blogsList.set(res));
  }


  ngOnInit(): void {
    this.load();
  }
}
