import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { BottomNavComponent } from '../../../shared/components/bottom-nav/bottom-nav.component';
import { CardEventoComponent } from '../../../shared/components/card-evento/card-evento.component';

export interface EventoData {
  dia: string;
  mes: string;
  ano: string;
}

export interface EventoItem {
  id?: string | number;
  data: EventoData;
  titulo: string;
  local: string;
  descricao: string;
}

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
  eventos: EventoItem[] = [
    {
      id: 1,
      data: {
        dia: '14',
        mes: 'MAR',
        ano: '2026',
      },
      titulo: 'Ensaio Aberto ao Público',
      local: 'Sede da Sociedade Lyra - Rua das Flores, 123',
      descricao:
        'Venha conhecer nosso coral em um ensaio aberto e gratuito.',
    },
    {
      id: 2,
      data: {
        dia: '19',
        mes: 'MAR',
        ano: '2026',
      },
      titulo: 'Workshop de Técnica Vocal',
      local: 'Auditório Municipal - Centro Cultural',
      descricao:
        'Workshop exclusivo com professor renomado para coristas.',
    },
    {
      id: 3,
      data: {
        dia: '9',
        mes: 'ABR',
        ano: '2026',
      },
      titulo: 'Concerto Beneficente',
      local: 'Igreja Matriz São Pedro - Centro',
      descricao:
        'Apresentação especial com renda revertida para instituição de caridade.',
    },
  ];

  getDataFormatada(evento: EventoItem): string {
    const { dia, mes, ano } = evento.data;
    return `${dia} ${mes}. ${ano}`;
  }

  onVerMais(id: string | number): void {
    console.log('ver evento', id);
    // Futuro: this.router.navigate(['/evento', id]);
  }
}
