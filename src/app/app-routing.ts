import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent }
];

export const AppRouting = RouterModule.forRoot(APP_ROUTES);