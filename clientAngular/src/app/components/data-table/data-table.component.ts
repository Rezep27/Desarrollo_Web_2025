import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interfaz para definir la estructura de los datos
interface TablaItem {
  id: number;
  columna1: string;
  columna2: string;
  columna3: string;
}

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent {
  // Titulo para mostrar con interpolacion
  titulo: string = 'Mi Tabla de Datos';
  
  // Array con los datos - 4 filas y 3 columnas de datos
  datosTabla: TablaItem[] = [
    {
      id: 1, 
      columna1: 'Dato 1-1', 
      columna2: 'Dato 1-2', 
      columna3: 'Dato 1-3'
    },
    {
      id: 2, 
      columna1: 'Dato 2-1', 
      columna2: 'Dato 2-2', 
      columna3: 'Dato 2-3'
    },
    {
      id: 3, 
      columna1: 'Dato 3-1', 
      columna2: 'Dato 3-2', 
      columna3: 'Dato 3-3'
    },
    {
      id: 4, 
      columna1: 'Dato 4-1', 
      columna2: 'Dato 4-2', 
      columna3: 'Dato 4-3'
    }
  ];

  // Metodo para cargar nuevos datos (simulado)
  cargarNuevosDatos(): void {
    // Simulamos la carga de nuevos datos
    this.datosTabla = [
      {
        id: 1, 
        columna1: 'Nuevo 1-1', 
        columna2: 'Nuevo 1-2', 
        columna3: 'Nuevo 1-3'
      },
      {
        id: 2, 
        columna1: 'Nuevo 2-1', 
        columna2: 'Nuevo 2-2', 
        columna3: 'Nuevo 2-3'
      },
      {
        id: 3, 
        columna1: 'Nuevo 3-1', 
        columna2: 'Nuevo 3-2', 
        columna3: 'Nuevo 3-3'
      },
      {
        id: 4, 
        columna1: 'Nuevo 4-1', 
        columna2: 'Nuevo 4-2', 
        columna3: 'Nuevo 4-3'
      }
    ];
  }
}
