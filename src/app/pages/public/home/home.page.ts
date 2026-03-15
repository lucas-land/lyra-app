import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonContent } from '@ionic/angular';

export interface NoticiaMock {
  imagem: string;
  titulo: string;
  descricao: string;
  data: string;
}

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
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage {
  @ViewChild(IonContent) content!: IonContent;

  noticias: NoticiaMock[] = [
    {
      imagem: 'https://picsum.photos/400/200?random=1',
      titulo: 'Coral Lyra realiza apresentação especial',
      descricao:
        'Apresentação emocionante marca o retorno dos ensaios presenciais após a pandemia.',
      data: '07/03/2026',
    },
    {
      imagem: 'https://picsum.photos/400/200?random=2',
      titulo: 'Abertura de inscrições para novos coristas',
      descricao:
        'Sociedade abre vagas para novos membros interessados em fazer parte do coral.',
      data: '08/09/2028',
    },
  ];

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

  ionViewDidEnter(): void {
    this.content?.scrollToTop(0);
  }

  onVerMais(id: string | number): void {
    console.log('ver evento', id);
    // Futuro: this.router.navigate(['/evento', id]);
  }
}
