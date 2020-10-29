import { Component, OnInit } from '@angular/core';
import { XkcdService } from '../../services/xkcd.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

    newComic : any [] = [];

    constructor( private xkcd: XkcdService  ) {
        this.xkcd.getNewReleses()
            .subscribe( (data: any) => {
                console.log(data);
        });
    }

}
