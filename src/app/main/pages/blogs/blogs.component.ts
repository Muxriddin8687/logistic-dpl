import { Component, inject, signal } from '@angular/core';
import { ActivityService } from 'src/app/core/services/activity.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {
  _activityService = inject(ActivityService);

  imgUrl = environment.api + 'assets/images/blogs/';
  blogsList: any = signal([]);

  ngOnInit(): void {
    this.blogsList = this._activityService.blogs;
  }
}
