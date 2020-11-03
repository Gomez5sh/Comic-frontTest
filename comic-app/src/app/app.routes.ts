import { RouterModule, Routes  } from '@angular/router';
import { HomeComponent  } from '../app/components/home/home.component';
import { AboutComponent  } from '../app/components/about/about.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
