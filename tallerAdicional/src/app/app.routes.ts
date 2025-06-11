import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Platos } from './platos/platos';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'platos', component: Platos },
];
