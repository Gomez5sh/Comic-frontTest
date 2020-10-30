import { Component, OnInit } from '@angular/core';
import { XkcdService } from '../../services/xkcd.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [XkcdService],
})
export class HomeComponent implements OnInit {

    img: [] = [];
    title: [] = [];
    alt: [] = [];
    year: [] = [];


    constructor( private data: XkcdService) {}

    ngOnInit(): void {
        this.data.getComic().subscribe( res  => {
            //console.log(res);
            this.img = res.img;
            this.title = res.title;
            this.alt = res.alt;
            this.year = res.year;
        } );
    }

}
