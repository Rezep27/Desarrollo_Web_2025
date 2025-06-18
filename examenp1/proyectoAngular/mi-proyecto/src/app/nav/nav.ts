import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav>
      <button routerLink="/">Principal</button>
      <button routerLink="/secundaria">Secundaria</button>
    </nav>
  `,
  styles: [`nav button { margin: 0 0.5rem; }`]
})
export class Nav { }
