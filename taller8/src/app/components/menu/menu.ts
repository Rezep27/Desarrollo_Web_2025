import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="app-menu">
      <a routerLink="/home"    routerLinkActive="active">Home</a>
      <a routerLink="/partidos" routerLinkActive="active">Partidos</a>
    </nav>
  `,
  styles: [`
    .app-menu {
      background-color: #f5f5f5;
      padding: 0.5rem 1rem;
      display: flex;
      gap: 1rem;
      font-family: Arial, sans-serif;
    }
    .app-menu a {
      text-decoration: none;
      color: #333;
      font-weight: 500;
    }
    .app-menu a.active {
      color: #007bff;
      font-weight: 700;
    }
  `]
})
export class MenuComponent { }

