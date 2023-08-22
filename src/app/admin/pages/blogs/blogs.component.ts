import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {

  http = inject(HttpClient);
  api = environment.api + 'blogs/';
  imgUrl = environment.api + 'assets/images/blogs/';

  imageList: any;


  load() {
    this.http
      .get(this.api + 'getAll.php')
      .subscribe(res => this.imageList = res);
  }


  onFileChange(event: any) {
    let formData = new FormData();
    formData.append('image', event.target.files[0]);

    this.http
      .post(this.api + 'insert.php', formData)
      .subscribe(res => {
        this.load();
      });
  }


  deleteImage(id: number) {
    this.http
      .delete(this.api + 'delete.php?id=' + id)
      .subscribe(() => this.load());
  }


  ngOnInit(): void {
    this.load();
  }
}
