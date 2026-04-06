import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { BottomNavComponent } from '../../../shared/components/bottom-nav/bottom-nav.component';
import { CardEventoComponent } from '../../../shared/components/card-evento/card-evento.component';
import { EVENTOS, type Evento } from '../../../shared/data/eventos.data';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    HeaderComponent,
    BottomNavComponent,
    CardEventoComponent,
  ],
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EventosPage {
  eventos: Evento[] = EVENTOS;

  constructor(private readonly router: Router) {}

  onVerMais(id: string | number): void {
    void this.router.navigate(['/evento', id]);
  }
}
