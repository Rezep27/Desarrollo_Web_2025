import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Nav } from './nav/nav';
import { Body } from './body/body';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Nav, Body],
  template: `
    <app-header></app-header>
    <app-nav></app-nav>
    <app-body></app-body>
  `,
})
export class App {
  protected title = 'mi-proyecto';
}
