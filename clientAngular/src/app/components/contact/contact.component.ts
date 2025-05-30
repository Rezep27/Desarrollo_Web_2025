import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  // Ejemplo de String interpolation - vinculacion de una via
  companyName: string = 'Amazing Photo Gallery';
  tagline: string = 'We capture your memories forever';
  currentYear: number = 2025;
  
  // Agregamos el atributo mecanismos
  mecanismos: string[] = [
    'Formulario de contacto',
    'Correo electronico directo',
    'Chat en linea',
    'Llamada telefonica',
    'Redes sociales'
  ];
  
  // Modelo de datos del formulario
  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
    // Aqui normalmente enviarias los datos del formulario a un servidor
    alert('Thank you for your message! We will get back to you soon.');
    this.formData = { name: '', email: '', message: '' };
  }
}
