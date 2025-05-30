import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { DataTableComponent } from './components/data-table/data-table.component';

// Interfaz para las fotos
interface Photo {
  id: number;
  title: string;
  url: string;
  description: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ContactComponent, DataTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Atributos para la vinculacion de una via con string interpolation
  title = 'My Angular Photo App';
  subtitle = 'Welcome to our beautiful gallery';
  developer = 'Your Name';
  version = '1.0.0';

  // Array de fotos para demostrar *ngFor
  photos: Photo[] = [
    {
      id: 1,
      title: 'Montañas',
      url: 'https://picsum.photos/id/10/300/200',
      description: 'Hermosa vista de montañas'
    },
    {
      id: 2,
      title: 'Playa',
      url: 'https://picsum.photos/id/15/300/200',
      description: 'Un día perfecto en la playa'
    },
    {
      id: 3,
      title: 'Ciudad',
      url: 'https://picsum.photos/id/20/300/200',
      description: 'Paisaje urbano al atardecer'
    },
    {
      id: 4,
      title: 'Naturaleza',
      url: 'https://picsum.photos/id/29/300/200',
      description: 'Explorando la naturaleza'
    }
  ];
}
