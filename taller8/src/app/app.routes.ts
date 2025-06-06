import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { PartidosComponent } from './pages/partidos/partidos';

export const routes: Routes = [
  // Redirige la raíz a /home
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Ruta a Home
  {
    path: 'home',
    component: HomeComponent
  },

  // Ruta a Partidos
  {
    path: 'partidos',
    component: PartidosComponent
  },

  // Cualquier otra ruta redirige a Home
  { path: '**', redirectTo: 'home' }
];

