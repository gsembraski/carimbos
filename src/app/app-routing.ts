import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'sobre', component: SobreComponent }
];

export const AppRouting = RouterModule.forRoot(APP_ROUTES);