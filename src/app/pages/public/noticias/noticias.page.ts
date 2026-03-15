import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { BottomNavComponent } from '../../../shared/components/bottom-nav/bottom-nav.component';
import { CardNoticiaComponent } from '../../../shared/components/card-noticia/card-noticia.component';

export interface NoticiaItem {
  id: number;
  imagem: string;
  titulo: string;
  descricao: string;
  data: string;
}

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    HeaderComponent,
    BottomNavComponent,
    CardNoticiaComponent,
  ],
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NoticiasPage {
  noticias: NoticiaItem[] = [
    {
      id: 1,
      imagem: 'https://picsum.photos/400/200?random=1',
      titulo: 'Coral Lyra realiza apresentação especial',
      descricao:
        'Apresentação emocionante marca o retorno dos ensaios presenciais após a pandemia.',
      data: '07/03/2026',
    },
    {
      id: 2,
      imagem: 'https://picsum.photos/400/200?random=2',
      titulo: 'Abertura de inscrições para novos coristas',
      descricao:
        'Sociedade abre vagas para novos membros interessados em fazer parte.',
      data: '06/03/2026',
    },
    {
      id: 3,
      imagem: 'https://picsum.photos/400/200?random=3',
      titulo: 'Concerto de Primavera 2026',
      descricao:
        'Tradicional concerto de primavera já tem data marcada para este ano.',
      data: '28/02/2026',
    },
  ];

  onVerMais(id: string | number): void {
    console.log('Ver mais', id);
    // Futuro: this.router.navigate(['/noticia', id]);
  }
}
