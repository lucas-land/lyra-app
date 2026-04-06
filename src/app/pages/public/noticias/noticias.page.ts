import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { BottomNavComponent } from '../../../shared/components/bottom-nav/bottom-nav.component';
import { CardNoticiaComponent } from '../../../shared/components/card-noticia/card-noticia.component';
import { NOTICIAS, type Noticia } from '../../../shared/data/noticias.data';

export type NoticiaItem = Noticia;

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
  noticias: NoticiaItem[] = NOTICIAS;

  constructor(private readonly router: Router) {}

  onVerMais(id: string | number): void {
    void this.router.navigate(['/noticia', id]);
  }
}
