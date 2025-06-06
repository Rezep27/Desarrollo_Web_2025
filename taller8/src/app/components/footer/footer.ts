import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="app-footer">
      <p>Desarrollado por Jairo Perez</p>
    </footer>
  `,
  styles: [`
    .app-footer {
      background-color: #1e2a38;
      color: white;
      text-align: center;
      padding: 1rem 0;
      font-family: Arial, sans-serif;
      margin-top: 2rem;
    }
    .app-footer p {
      margin: 0;
      font-size: 0.9rem;
    }
  `]
})
export class FooterComponent { }

