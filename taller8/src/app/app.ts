import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header';
import { MenuComponent } from './components/menu/menu';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  // Importamos los componentes que usaremos en el template
  imports: [HeaderComponent, MenuComponent, RouterOutlet, FooterComponent],
  template: `
    <app-header></app-header>

    <app-menu></app-menu>

    <div class="main-container">
      <router-outlet></router-outlet>
    </div>

    <app-footer></app-footer>
  `,
  styles: [`
    .main-container {
      padding: 1rem;
      max-width: 800px;
      margin: 0 auto;
    }
  `]
})
export class AppComponent { }

