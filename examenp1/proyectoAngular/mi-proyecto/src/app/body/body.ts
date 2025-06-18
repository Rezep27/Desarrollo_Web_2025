import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `<main><router-outlet></router-outlet></main>`,
  styles: [`main { padding: 1rem; }`]
})
export class Body { }
