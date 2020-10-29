import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';

// ROUTES
import { APP_ROUTING  } from './app.routes';

// Provider
import { XkcdService } from './services/xkcd.service'; 

// COMPONETS
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
      BrowserModule,
      APP_ROUTING,
      HttpClientModule
  ],
    providers: [
        XkcdService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
