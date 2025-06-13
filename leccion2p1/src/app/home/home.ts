import { Component } from '@angular/core';
import { CabeceraPrincipal } from '../cabecera-principal/cabecera-principal';
import { Navbar } from '../navbar/navbar';
import { Carrusel } from '../carrusel/carrusel';

@Component({
  selector: 'app-home',
  imports: [CabeceraPrincipal, Navbar, Carrusel],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
