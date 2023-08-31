import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ActivityService {
    private api: string = environment.api;
    public blogs = signal<Array<any>>([]);
    public news = signal<Array<any>>([]);

    constructor(private _http: HttpClient) {
        this.load();
    }

    load() {
        this._http.get(this.api + 'news/getAll.php').subscribe((res: any) => this.news.set(res));
        this._http.get(this.api + 'blogs/getAll.php').subscribe((res: any) => this.blogs.set(res));
    }

}
