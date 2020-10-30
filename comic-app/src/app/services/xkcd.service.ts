import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class XkcdService {

    constructor( private http: HttpClient ) { }

    // tslint:disable-next-line: typedef
    getComic(): Observable<any>{
        return this.http.get<any>('/info.0.json');
    }
}
