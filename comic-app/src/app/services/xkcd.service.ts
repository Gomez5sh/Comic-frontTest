import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class XkcdService {

    constructor( private http: HttpClient,  ) { }

    getNewReleses( ){
        return this.http.get('http://xkcd.com/info.0.json');
    }
}
