import { Component, OnInit } from '@angular/core';
import { XkcdService } from '../../services/xkcd.service';
import { StarRatingComponent } from 'ng-starrating';

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



    // tslint:disable-next-line: typedef
    /*onRate($event: {oldValue: number, newValue: number, starRating: StarRatingComponent}) {
        alert(`Old Value:${$event.oldValue},
          New Value: ${$event.newValue},
          Checked Color: ${$event.starRating.checkedcolor},
          Unchecked Color: ${$event.starRating.uncheckedcolor}`);
      } */

     constructor( private data: XkcdService) {}

    ngOnInit(): void {
        this.data.getComic().subscribe( res  => {
            // console.log(res);
            this.img = res.img;
            this.title = res.title;
            this.alt = res.alt;
            this.year = res.year;
        } );
    }

}
