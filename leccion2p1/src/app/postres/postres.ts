import { Component } from '@angular/core';

import { CabeceraPrincipal } from '../cabecera-principal/cabecera-principal';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-postres',
  imports: [CabeceraPrincipal, Navbar],
  templateUrl: './postres.html',
  styleUrl: './postres.css'
})
export class Postres {

}
