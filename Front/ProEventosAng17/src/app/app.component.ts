import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventosComponent } from './components/eventos/eventos.component';
import { PalestrantesComponent } from './components/palestrantes/palestrantes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:
    [
      RouterOutlet,
      EventosComponent,
      PalestrantesComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'ProEventosAng17';
}
