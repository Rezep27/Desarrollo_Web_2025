import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Postres } from './postres/postres';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },  // ruta raíz redirige a /home
  { path: 'home', component: Home },
  { path: 'postres', component: Postres }
];
