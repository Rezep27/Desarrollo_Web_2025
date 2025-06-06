import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section class="home-section">
      <h2>Bienvenido a Fútbol Total</h2>
      <p>
        Aquí encontrarás información general sobre el mundo del fútbol, últimas noticias,
        curiosidades y datos de interés. Navega a la sección "Partidos" para ver el
        listado de encuentros y sus resultados.
      </p>
    </section>
  `,
  styles: [`
    .home-section {
      font-family: Arial, sans-serif;
      line-height: 1.6;
    }
    .home-section h2 {
      margin-bottom: 1rem;
      color: #1e2a38;
    }
    .home-section p {
      font-size: 1.1rem;
    }
  `]
})
export class HomeComponent { }

