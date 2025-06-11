import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecera } from './cabecera/cabecera';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cabecera],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tallerAdicional';
}
