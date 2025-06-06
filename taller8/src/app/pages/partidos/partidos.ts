import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Partido {
  equipo1: string;
  equipo2: string;
  fecha: string;
  marcador: string;
}

@Component({
  selector: 'app-partidos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="partidos-section">
      <h2>Lista de Partidos</h2>

      <!-- 1) Mientras 'partidos' sea null, mostramos "Cargando partidos…" -->
      <div *ngIf="partidos === null" class="loading">
        Cargando partidos…
      </div>

      <!-- 2) Cuando 'partidos' no es null -->
      <ng-container *ngIf="partidos !== null">
        <!-- 2.a) Si el arreglo está vacío -->
        <div *ngIf="partidos.length === 0" class="no-partidos">
          No hay partidos para mostrar.
        </div>

        <!-- 2.b) Si hay elementos, iteramos -->
        <div *ngFor="let partido of partidos" class="card-partido">
          <h3>{{ partido.equipo1 }} vs {{ partido.equipo2 }}</h3>
          <p><strong>Fecha:</strong> {{ partido.fecha }}</p>
          <p><strong>Marcador:</strong> {{ partido.marcador }}</p>
        </div>
      </ng-container>
    </section>
  `,
  styles: [`
    .partidos-section {
      font-family: Arial, sans-serif;
      margin-top: 2rem;
    }
    .partidos-section h2 {
      margin-bottom: 1rem;
      color: #1e2a38;
    }
    .loading {
      font-style: italic;
      color: #666;
    }
    .no-partidos {
      font-weight: bold;
      color: #cc0000;
      margin-bottom: 1rem;
    }
    .card-partido {
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 1rem;
      margin-bottom: 1rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .card-partido h3 {
      margin: 0 0 0.5rem 0;
      color: #333;
    }
    .card-partido p {
      margin: 0.25rem 0;
    }
  `]
})
export class PartidosComponent implements OnInit {
  // Inicialmente 'partidos' es null ⇒ usamos esto para mostrar “Cargando…”
  partidos: Partido[] | null = null;

  // URL del JSON en GitHub
  private readonly url = 'https://raw.githubusercontent.com/vjuradov/ejemploDatosConsumo/refs/heads/main/datos.json';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<{ partidos: Partido[] }>(this.url).subscribe({
      next: (resp) => {
        this.partidos = resp.partidos;  // Ahora ya no es null, es el array (o [])
      },
      error: (err) => {
        console.error('Error al cargar partidos:', err);
        this.partidos = [];  // En caso de error, asignamos [] para que no quede null
      }
    });
  }
}

