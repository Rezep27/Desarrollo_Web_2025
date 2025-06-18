import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `<header><h1>{{ titulo }}</h1></header>`,
  styles: [`header { background: #eee; padding: 1rem; }`]
})
export class Header {
  titulo = '';

  constructor(private title: Title, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.titulo = this.title.getTitle();
      }
    });
  }
}
