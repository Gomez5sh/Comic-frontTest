import { Component, OnInit } from '@angular/core';
import { XkcdService } from '../../services/xkcd.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [XkcdService],
})
export class HomeComponent implements OnInit {

    constructor( private data: XkcdService) {}

    ngOnInit(): void {
        this.data.getComic().subscribe( ( res: any ) => {
            console.log(res);
        } );
    }

}
