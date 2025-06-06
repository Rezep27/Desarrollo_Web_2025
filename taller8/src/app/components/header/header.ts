import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="app-header">
      <h1>Fútbol Total S.A.</h1>
    </header>
  `,
  styles: [`
    .app-header {
      background-color: #1e2a38;
      color: white;
      text-align: center;
      padding: 1rem 0;
      font-family: Arial, sans-serif;
    }
  `]
})
export class HeaderComponent { }

