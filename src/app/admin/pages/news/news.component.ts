import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
declare let mdb: any;

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  http = inject(HttpClient);
  api = environment.api + 'news/';
  imgUrl = environment.api + 'assets/images/news/';

  imageList: any;
  selectItemId: number = 0;
  selectedImage: string = '';
  selectedUrl: number = 0;


  load() {
    this.http
      .get(this.api + 'getAll.php')
      .subscribe(res => this.imageList = res);
  }

  selectItem(id: number) {
    this.imageList.forEach((item: any) => {
      if (item.id == id) {
        this.selectItemId = item.id;
        this.selectedImage = item.mobile_image;
        this.selectedUrl = item.url_id;
      }
    });
  }

  selectUrl(event: any) {
    this.http
      .get(this.api + 'setUrl.php?id=' + this.selectItemId + '&url_id=' + event.value)
      .subscribe(() => this.load());
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

  addMobileImage(event: any) {
    let formData = new FormData();
    formData.append('image', event.target.files[0]);

    this.http
      .post(this.api + 'insertMobile.php?id=' + this.selectItemId, formData)
      .subscribe((res: any) => {
        this.selectedImage = res;
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
