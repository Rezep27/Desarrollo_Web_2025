import { Routes } from '@angular/router';

import { Main } from './main/main';
import { Secundaria } from './secundaria/secundaria';
export const routes: Routes = [
  { path: '', component: Main, title: 'Página Principal' },
  { path: 'secundaria', component: Secundaria, title: 'Página Secundaria' }
];
